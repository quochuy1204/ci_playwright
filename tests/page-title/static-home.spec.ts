// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Home page title — Static (happy path)', async ({ page }) => {
    // 1. Start with a fresh browser session. Navigate to '/' and wait for full load.
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/`, { waitUntil: 'load' });

    // expect: Page loads successfully (HTTP 200) and title matches
    const title = await page.title();
    expect(title).toBe('Expected Home Title');

    // expect: A <title> element exists in <head> and its text equals document.title.
    const titleEl = await page.evaluate(() => document.querySelector('head > title')?.textContent ?? '');
    expect(titleEl).toBe(title);
  });
});