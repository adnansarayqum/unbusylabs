import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteHeader } from "@/components/layout/SiteHeader";

describe("SiteHeader", () => {
  it("renders primary navigation links", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "What we do" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Start a project" }).length).toBeGreaterThan(0);
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);

    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    const mobileMenu = screen.getByRole("navigation", { name: "Mobile" });
    expect(mobileMenu).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("navigation", { name: "Mobile" })).not.toBeInTheDocument();
  });
});
