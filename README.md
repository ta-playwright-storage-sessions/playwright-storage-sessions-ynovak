# ДЗ: Cookies / Storage / Sessions (Playwright + TypeScript)

Скелет для практики cookies, `localStorage` і `storageState` на **«Навчай українською»**.

Замініть `test.skip` / `setup.skip` і `TODO` на робочий код. Готових розв’язків немає.

## Що тестуємо

| Що | URL |
|---|---|
| UI | http://localhost/ |

Сесія додатку живе в **`localStorage`**, не в cookies: `accessToken`, `refreshToken`, `id`, `role` (`role` = `roleName` з `/signin`).

## Підготовка

```bash
npm install
npx playwright install chromium
cp .env.example .env
```

У `.env` вкажіть навчальний акаунт. Пароль у git не комітити.

```bash
npm test              # setup + guest + user
npm run test:guest    # завдання 1–2 (чистий контекст)
npm run test:user     # завдання 3–4 (після setup)
npm run report
npm run lint
npm run format
npm run check         # Prettier --check + ESLint
```

## Структура

```
src/
  pages/authUi.ts           # UI логіну / логауту
  helpers/session.ts        # асерти localStorage
tests/
  auth.setup.ts             # завдання 3: зберегти storageState
  01-cookies.spec.ts        # завдання 1
  02-login-local-storage.spec.ts
  03-storage-state.spec.ts
  04-logout.spec.ts
playwright/.auth/           # user.json з’явиться після setup (у .gitignore)
```

Проєкти в `playwright.config.ts`:

| Проєкт | Навіщо |
|---|---|
| `setup` | логін один раз, пише `playwright/.auth/user.json` |
| `guest` | порожній `storageState` — cookies і логін з нуля |
| `user` | `dependencies: ['setup']` + збережена сесія |

Поки `user.json` немає, `user` стартує з порожнім storage — щоб скелет не падав. Після реалізації setup файл з’явиться сам.

## Загальні правила

1. Немає `waitForTimeout` / `sleep`.
2. Немає `page.route` / `fulfill` — наступна тема.
3. Після UI-логіну **не** викликайте `localStorage.setItem` — додаток пише ключі сам.
4. `playwright/.auth/*.json` не комітити.
5. Перед здачею: `npm run check`.

---

## Завдання 1. Cookies API

Файл: `tests/01-cookies.spec.ts`

Відкрити `/`. Через `context`:

- `cookies()` — це масив
- `addCookies` — cookie `hw-session=ok` з `url` поточної сторінки
- знову `cookies()` — cookie є (`name` / `value`)
- `clearCookies()` — цієї cookie немає

Це не авторизація додатку, а API Playwright. Якщо після UI-логіну cookies порожні — нормально: auth у `localStorage`.

---

## Завдання 2. Login → localStorage

Файл: `tests/02-login-local-storage.spec.ts`  
Хелпери: `src/pages/authUi.ts`, `src/helpers/session.ts`

Проєкт `guest` уже з порожнім `storageState`.

1. `goto('/')`.
2. `.user-profile` → menuitem **Увійти** → dialog **Вхід**.
3. `getByLabel('Емейл')` / `Пароль` з `.env`.
4. Клік **Увійти**, зловити `POST` `**/signin` (`waitForResponse`).
5. У body є `accessToken` і `refreshToken`.
6. `expect.poll` (або helper):
   - `page.localStorage.getItem('accessToken')` === body
   - `refreshToken` так само
   - `id` === `String(body.id)`
   - `role` === `body.roleName`
7. У меню видимий **Особистий кабінет**.

---

## Завдання 3. Сесія через `storageState`

Файли: `tests/auth.setup.ts`, `tests/03-storage-state.spec.ts`

1. У setup: логін як у завданні 2 → `context.storageState({ path: 'playwright/.auth/user.json' })`.
2. Тест 3 **без** форми: `goto('/')` → токени вже в `localStorage` → **Особистий кабінет**.

Конфіг уже має `setup` + `user` з `dependencies`. Зніміть `setup.skip`.

---

## Завдання 4. Вихід скидає storage

Файл: `tests/04-logout.spec.ts`

У контексті `user`: відкрити меню → **Вийти** (уточніть текст у UI). Після виходу `accessToken` порожній / `null`, знову видно **Увійти**.

---

## Формат здачі

1. Зняти skip, тести зелені.
2. HTML-репорт.
3. Коротко: cookies vs `localStorage`, чи з’явився `user.json` локально (файл у git не класти).

**Критерії:** cookies add/read/clear; UI-логін пише 4 ключі; setup + `storageState` без повторного логіну; logout чистить сесію; `.auth` не в git; немає `waitForTimeout`; `npm run check` зелений.
