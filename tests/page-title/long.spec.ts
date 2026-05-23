// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Long title preservation', async ({ page }) => {
    // 1. Start fresh, navigate to '/long-title' where the title contains a very long string (e.g., 400 characters).
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/long-title`, { waitUntil: 'load' });

    const long = 'x'.repeat(400);

    // expect: document.title equals the full 400-character string (exact match).
    expect(await page.title()).toBe(long);

    // expect: The DOM <title> element text contains the full string (no truncation in DOM).
    const titleEl = await page.evaluate(() => document.querySelector('head > title')?.textContent ?? '');
    expect(titleEl).toBe(long);
  });
});