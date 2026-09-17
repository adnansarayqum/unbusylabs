import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Pixel 7"] });

test("mobile menu opens, keeps the project CTA visible, and closes", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  await page.getByRole("button", { name: "Open menu" }).click();

  const mobileMenu = page.getByRole("navigation", { name: "Mobile" });
  await expect(mobileMenu).toBeVisible();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a project" }).last()).toBeVisible();

  await page.getByRole("button", { name: "Close menu" }).click();
  await expect(mobileMenu).not.toBeVisible();
});
