import { test, expect } from '@playwright/test';

/**
 * TASK 1 — Cookies API
 * Див. README → Завдання 1.
 *
 * Це не сесія додатку, а context.cookies / addCookies / clearCookies.
 */

test.describe('Cookies API', () => {
  test.skip('should add, read and clear a cookie', async ({ page, context }) => {
    await page.goto('/');

    // TODO: const before = await context.cookies() — масив
    // TODO: addCookies [{ name: 'hw-session', value: 'ok', url: page.url() }]
    // TODO: cookies() містить hw-session
    // TODO: clearCookies() — hw-session немає

    expect(context).toBeDefined();
  });
});
