import { test, expect } from '@playwright/test';
import { AuthUi } from '../src/pages/authUi';
import { expectSessionPersistedInLocalStorage } from '../src/helpers/session';

/**
 * TASK 2 — Login UI → localStorage
 * Див. README → Завдання 2.
 *
 * Проєкт guest уже стартує з порожнім storageState.
 * Не викликайте localStorage.setItem — додаток пише ключі сам.
 */

test.describe('Login writes session to localStorage', () => {
  test.skip('should persist accessToken, refreshToken, id and role', async ({ page }) => {
    const authUi = new AuthUi(page);

    // TODO: goto('/')
    // TODO: openLoginDialog → fillLoginForm → submitLogin
    // TODO: body.accessToken / refreshToken truthy
    // TODO: expectSessionPersistedInLocalStorage(page, body)
    // TODO: expectPersonalCabinetVisible()

    expect(authUi).toBeDefined();
    expect(expectSessionPersistedInLocalStorage).toBeDefined();
  });
});
