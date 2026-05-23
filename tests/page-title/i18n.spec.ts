// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Page Title Verification', () => {
  test('Special characters and localization (i18n)', async ({ page }) => {
    // 1. Run separate fresh sessions for language variants: '/?lang=ja', '/?lang=ar', and '/?lang=emoji'.
    const base = process.env.BASE_URL || 'http://localhost:3000';
    const locales = ['?lang=ja', '?lang=ar', '?lang=emoji'];

    for (const loc of locales) {
      await page.goto(`${base}/${loc}`, { waitUntil: 'load' });
      const title = await page.title();

      // expect: For each locale, document.title equals the expected localized string.
      // NOTE: Replace the following placeholder with exact expected strings if known.
      expect(title.length).toBeGreaterThan(0);

      // expect: Titles preserve non-Latin scripts, RTL content, and emoji (exact match).
      // Basic sanity: title should not contain the Unicode replacement character.
      expect(title.includes('\uFFFD')).toBeFalsy();
    }
  });
});