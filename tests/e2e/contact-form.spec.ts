import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Feed us the busywork" }).click();
    await expect(page.getByRole("alert").first()).toBeVisible();
  });

  test("submits successfully end to end (mocked network)", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.goto("/contact");

    await page.getByLabel("Name", { exact: true }).fill("Jane Smith");
    await page.getByLabel("Work email").fill("jane@example.com");
    await page.getByLabel("Business name").fill("Example Ltd");
    await page
      .getByLabel("What would you like to improve?")
      .fill("We need to automate our client onboarding process.");
    await page.getByLabel("Who will use the solution?").fill("Our operations team");
    await page.getByLabel("Interested in").selectOption("Automation");
    await page.getByLabel("Desired timescale").fill("6-8 weeks");
    await page.getByLabel("Indicative budget").selectOption("£3,000–£7,500");
    await page.getByLabel("Email", { exact: true }).check();
    await page.getByLabel(/I agree to the/).check();

    await page.getByRole("button", { name: "Feed us the busywork" }).click();

    await expect(page.getByRole("status")).toContainText(/thanks/i);
  });
});
