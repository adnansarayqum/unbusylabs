import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { getEmailProvider } from "@/lib/email-provider";

export async function POST(request: Request) {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form for errors.", errors: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Honeypot: real users never fill this field. Silently pretend success.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = parsed.data;
  const provider = getEmailProvider();
  const result = await provider.sendEnquiry(enquiry);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: "We couldn't send that just now. Please try again in a moment." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
