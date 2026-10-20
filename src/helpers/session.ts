import { type Page } from '@playwright/test';
import { type SignInBody } from './authUi';

/**
 * Перевірка, що додаток сам записав сесію в localStorage.
 * У тесті не викликайте localStorage.setItem.
 */
export async function expectSessionPersistedInLocalStorage(
  _page: Page,
  _loginBody: SignInBody,
): Promise<void> {
  throw new Error('TODO: poll accessToken, refreshToken, id, role');
}
