// spec: specs/home-page-title.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Title Verification', () => {
  test('Verify home page has correct page title', async ({ page }) => {
    // 1. Navigate to the Playwright home page at https://playwright.dev/
    await page.goto('https://playwright.dev/');
    
    // 2. Inspect the page title
    const pageTitle = await page.evaluate(() => document.title);
    expect(pageTitle).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
    
    // 3. Verify the title contains key marketing terms
    expect(pageTitle).toContain('Playwright');
    expect(pageTitle).toContain('end-to-end testing');
    expect(pageTitle).toContain('web apps');
  });

  test('Verify home page title contains Playwright text', async ({ page }) => {
    // 1. Navigate to the Playwright home page
    await page.goto('https://playwright.dev/');
    
    // 2. Check that the page title matches the pattern /Playwright/
    const pageTitle = await page.evaluate(() => document.title);
    expect(pageTitle).toMatch(/Playwright/);
    expect(pageTitle).toContain('Playwright');
  });

  test('Verify main heading is visible on home page', async ({ page }) => {
    // 1. Navigate to the Playwright home page at https://playwright.dev/
    await page.goto('https://playwright.dev/');
    
    // 2. Locate the main heading element
    const mainHeading = page.getByRole('heading', { name: /Playwright enables reliable web automation/ });
    await expect(mainHeading).toBeVisible();
    
    // 3. Verify the heading is a level 1 (h1) element
    const headingElement = page.getByRole('heading', { level: 1, name: /Playwright enables reliable web automation/ });
    await expect(headingElement).toBeVisible();
  });
});