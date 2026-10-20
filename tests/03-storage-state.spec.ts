import { test, expect } from '@playwright/test';
import { AuthUi } from '../src/pages/authUi';

/**
 * TASK 3 — сесія з storageState
 * Див. README → Завдання 3.
 *
 * Проєкт user залежить від setup і підхоплює playwright/.auth/user.json.
 * У цьому тесті форму логіну НЕ заповнювати.
 */

test.describe('Session from storageState', () => {
  test.skip('should already be logged in without filling the form', async ({ page }) => {
    const authUi = new AuthUi(page);

    // TODO: goto('/')
    // TODO: expect.poll → localStorage accessToken / refreshToken / id / role
    // TODO: expectPersonalCabinetVisible()

    expect(authUi).toBeDefined();
  });
});
