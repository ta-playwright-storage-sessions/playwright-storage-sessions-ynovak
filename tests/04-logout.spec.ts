import { test, expect } from '@playwright/test';
import { AuthUi } from '../src/pages/authUi';

/**
 * TASK 4 — logout чистить storage
 * Див. README → Завдання 4.
 *
 * Стартує зі storageState (проєкт user).
 */

test.describe('Logout clears session', () => {
  test.skip('should remove accessToken and show login again', async ({ page }) => {
    const authUi = new AuthUi(page);

    // TODO: goto('/')
    // TODO: переконатись, що сесія є (кабінет або accessToken)
    // TODO: logout()
    // TODO: accessToken порожній / null
    // TODO: знову видно Увійти

    expect(authUi).toBeDefined();
  });
});
