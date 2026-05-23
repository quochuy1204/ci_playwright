// spec: specs/page-title-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

// This test performs a server-side HTML fetch and compares the server-provided <title>
// with the client-side document.title after page load.

test.describe('Page Title Verification', () => {
  test('Server-side rendered (SSR) title present in HTML', async ({ page, request }) => {
    // 1. Perform an HTTP GET for '/' (no JS execution) and parse the returned HTML to extract the <title>. Then load the page in the browser and compare.
    const base = process.env.BASE_URL || 'http://localhost:3000';
    const res = await request.get(`${base}/`);
    expect(res.ok()).toBeTruthy();
    const html = await res.text();

    const match = html.match(/<title>([\s\S]*?)<\/title>/i);
    const serverTitle = match ? match[1].trim() : '';

    // Load the page in the browser and compare.
    await page.goto(`${base}/`, { waitUntil: 'load' });
    const clientTitle = await page.title();

    // expect: The server response HTML contains a <title> element with the expected text.
    expect(serverTitle.length).toBeGreaterThan(0);

    // expect: After client load, document.title equals the server-provided title unless intentionally changed client-side.
    expect(clientTitle).toBe(serverTitle);
  });
});