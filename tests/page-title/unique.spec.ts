// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Title uniqueness across routes (accessibility)', async ({ page }) => {
    // 1. Start fresh, visit '/' and capture title. Then navigate to '/about' and capture title.
    const base = process.env.BASE_URL || 'http://localhost:3000';
    await page.goto(`${base}/`, { waitUntil: 'load' });
    const title1 = await page.title();

    await page.goto(`${base}/about`, { waitUntil: 'load' });
    const title2 = await page.title();

    // expect: Each visited route's title is non-empty.
    expect(title1.length).toBeGreaterThan(0);
    expect(title2.length).toBeGreaterThan(0);

    // expect: Titles for different routes are not identical (helps orientation for assistive tech).
    expect(title1).not.toBe(title2);
  });
});