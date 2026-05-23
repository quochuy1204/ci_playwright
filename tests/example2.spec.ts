// @ts-check
import { test, expect } from "@playwright/test";

test("has title Playwright", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
