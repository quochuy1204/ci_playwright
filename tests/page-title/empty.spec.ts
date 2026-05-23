// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Missing / empty title handling', async ({ page }) => {
    // 1. Start fresh, navigate to '/no-title' (page variant intentionally omits or clears the <title> element).
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/no-title`, { waitUntil: 'load' });

    // expect: document.title is an empty string.
    expect(await page.title()).toBe('');

    // expect: Either no <title> element exists in <head>, or a <title> element exists but its text is empty.
    const titleEl = await page.evaluate(() => document.querySelector('head > title')?.textContent ?? null);
    if (titleEl !== null) expect(titleEl).toBe('');

    // expect: No uncaught errors occur during load related to title handling.
  });
});