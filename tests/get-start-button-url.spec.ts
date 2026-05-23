// spec: specs/get-start-button-url.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Get Started Button URL Verification', () => {
  test('Verify get started button is visible on home page', async ({ page }) => {
    // 1. Navigate to the Playwright home page at https://playwright.dev/
    await page.goto('https://playwright.dev/');
    
    // 2. Look for the 'Get started' button in the hero section
    const getStartedButton = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedButton).toBeVisible();
    
    // 3. Verify the button is in a visible and interactive state
    await expect(getStartedButton).toBeEnabled();
  });

  test('Verify get started button has correct href attribute', async ({ page }) => {
    // 1. Navigate to the Playwright home page
    await page.goto('https://playwright.dev/');
    
    // 2. Locate the 'Get started' button element
    const getStartedButton = page.getByRole('link', { name: 'Get started' });
    
    // 3. Inspect the href attribute of the button
    const hrefValue = await getStartedButton.getAttribute('href');
    expect(hrefValue).toBe('/docs/intro');
    
    // 4. Verify the href contains the correct documentation path
    expect(hrefValue).toMatch(/\/docs\/intro/);
  });

  test('Verify clicking get started button navigates to correct page', async ({ page }) => {
    // 1. Navigate to the Playwright home page
    await page.goto('https://playwright.dev/');
    
    // 2. Locate and click the 'Get started' button
    const getStartedButton = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.click();
    
    // 3. Verify page navigation after button click
    // 4. Check the browser URL matches the expected documentation path
    await expect(page).toHaveURL(/\/docs\/intro/);
  });
});