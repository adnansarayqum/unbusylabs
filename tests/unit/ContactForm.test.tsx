import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      })
    );
  });

  it("shows validation errors when required fields are missing", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /feed us the busywork/i }));

    expect(await screen.findAllByRole("alert")).not.toHaveLength(0);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("submits successfully with valid input", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "Jane Smith");
    await user.type(screen.getByLabelText("Work email"), "jane@example.com");
    await user.type(screen.getByLabelText("Business name"), "Example Ltd");
    await user.type(
      screen.getByLabelText("What would you like to improve?"),
      "We need to automate our client onboarding process."
    );
    await user.type(screen.getByLabelText("Who will use the solution?"), "Our ops team");
    await user.selectOptions(screen.getByLabelText("Interested in"), "Automation");
    await user.type(screen.getByLabelText("Desired timescale"), "6-8 weeks");
    await user.selectOptions(screen.getByLabelText("Indicative budget"), "£3,000–£7,500");
    await user.click(screen.getByLabelText("Email"));
    await user.click(screen.getByLabelText(/I agree to the/));

    await user.click(screen.getByRole("button", { name: /feed us the busywork/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
    });
    expect(global.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" })
    );
  });
});
