import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

export function ServicePills() {
  return (
    <nav aria-label="Services" className="relative mb-4">
      <Image
        src="/images/service-pills.png"
        alt=""
        width={1536}
        height={105}
        className="h-auto w-full"
      />
      <ul className="absolute inset-0 flex">
        {services.map((service) => (
          <li key={service.slug} className="flex-1">
            <Link
              href={`/services#${service.slug}`}
              className="flex h-full items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
            >
              <span className="sr-only">{service.shortLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
