import { test as setup } from '@playwright/test';
import path from 'path';
import { AuthUi } from '../src/pages/authUi';
import { expectSessionPersistedInLocalStorage } from '../src/helpers/session';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

/**
 * TASK 3 — зберегти storageState після логіну.
 * Зніміть setup.skip, коли AuthUi і helper готові.
 */
setup.skip('authenticate teach ua', async ({ page }) => {
  const authUi = new AuthUi(page);

  // TODO: goto('/')
  // TODO: openLoginDialog → fillLoginForm → submitLogin
  // TODO: expectSessionPersistedInLocalStorage
  // TODO: page.context().storageState({ path: authFile })

  void authUi;
  void expectSessionPersistedInLocalStorage;
  void authFile;
});
