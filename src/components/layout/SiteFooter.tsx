import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerLinks, navLinks, siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-lab grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate">
            {siteConfig.promise} We turn messy business processes into useful digital systems.
          </p>
          <div className="mt-6 flex gap-4">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="UnbusyLabs on LinkedIn"
                className="text-ink/60 hover:text-ink"
              >
                <Linkedin size={20} />
              </a>
            )}
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="UnbusyLabs on GitHub"
                className="text-ink/60 hover:text-ink"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <FooterColumn title="Navigate" links={navLinks} />
        <FooterColumn title="Services" links={footerLinks.services} />
        <FooterColumn title="Work" links={[...footerLinks.work, ...footerLinks.legal]} />
      </div>

      <div className="border-t border-border py-6">
        <div className="container-lab flex flex-col gap-2 text-xs text-slate sm:flex-row sm:justify-between">
          <p>
            © {year} UnbusyLabs. {siteConfig.supportingPhrase}
          </p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-ink">
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-slate hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
