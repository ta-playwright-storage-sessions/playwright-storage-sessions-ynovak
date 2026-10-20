import { type Locator, type Page } from '@playwright/test';

export type SignInBody = {
  accessToken: string;
  refreshToken: string;
  id: string | number;
  roleName: string;
};

/**
 * UI-хелпери логіну. Реалізуйте методи, тести лише викликають їх.
 * Локатори з лекції: .user-profile, menuitem «Увійти», dialog «Вхід».
 */
export class AuthUi {
  constructor(private readonly page: Page) {
    void this.page;
  }

  profileMenu(): Locator {
    throw new Error('TODO: locator .user-profile');
  }

  async openLoginDialog(): Promise<Locator> {
    throw new Error('TODO: open profile menu → Увійти, повернути dialog');
  }

  async fillLoginForm(
    _dialog: Locator,
    _email = process.env.USER_EMAIL ?? 'user@example.com',
    _password = process.env.USER_PASSWORD ?? 'default_password',
  ): Promise<void> {
    throw new Error('TODO: fill Емейл / Пароль');
  }

  /** Клік «Увійти» + waitForResponse POST /signin, повернути JSON body. */
  async submitLogin(_dialog: Locator): Promise<SignInBody> {
    throw new Error('TODO: waitForResponse + click Увійти');
  }

  async expectPersonalCabinetVisible(): Promise<void> {
    throw new Error('TODO: menu item Особистий кабінет');
  }

  async logout(): Promise<void> {
    throw new Error('TODO: Вийти — уточніть текст у UI');
  }
}
