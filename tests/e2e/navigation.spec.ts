import { test, expect } from "@playwright/test";

test.describe("Homepage navigation", () => {
  test("loads the homepage with the core hero copy", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /messy process in/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Feed us the busywork" }).first()).toBeVisible();
  });

  test("navigates to services via the primary nav", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("navigation", { name: "Mobile" }).getByRole("link", { name: "What we do" }).click();
    } else {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "What we do" }).click();
    }

    await expect(page).toHaveURL(/\/services/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("has no broken internal links from the homepage", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page
      .locator("a[href^='/']")
      .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).getAttribute("href")));

    const uniqueHrefs = [...new Set(hrefs.filter((href): href is string => Boolean(href) && !href.includes("#")))];

    for (const href of uniqueHrefs) {
      const response = await page.request.get(href);
      expect(response.status(), `${href} should resolve`).toBeLessThan(400);
    }
  });
});
