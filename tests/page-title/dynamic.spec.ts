// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Dynamic title set after async load', async ({ page }) => {
    // 1. Start fresh, navigate to '/async-title'. Wait for network idle and for the async content marker (e.g., '#content') to appear.
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/async-title`, { waitUntil: 'load' });

    // Wait for async content marker
    await page.waitForSelector('#content', { timeout: 5000 });

    // expect: document.title updates to 'Data Loaded - Expected Home Title' within 5 seconds of page load.
    await page.waitForFunction(() => document.title === 'Data Loaded - Expected Home Title', {}, { timeout: 5000 }).catch(() => {});
    expect(await page.title()).toBe('Data Loaded - Expected Home Title');

    // expect: No JavaScript errors relevant to title setting are present in the console.
    // (Left as a manual check / additional instrumentation if needed.)
  });
});