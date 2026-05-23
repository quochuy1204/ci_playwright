// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Title updates on navigation (SPA)', async ({ page }) => {
    // 1. Start fresh, navigate to '/'. Click the UI link to 'About' (or programmatically navigate to '/about').
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/`, { waitUntil: 'load' });

    // Navigate to About and wait for title update
    await page.goto(`${base}/about`, { waitUntil: 'load' });

    // expect: document.title changes to 'About - Expected Home Title' within 2 seconds.
    await page.waitForFunction(() => document.title === 'About - Expected Home Title', {}, { timeout: 2000 }).catch(() => {});
    expect(await page.title()).toBe('About - Expected Home Title');

    // expect: The <title> element text matches document.title after navigation.
    const titleEl = await page.evaluate(() => document.querySelector('head > title')?.textContent ?? '');
    expect(titleEl).toBe(await page.title());
  });
});