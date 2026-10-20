import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const uiBaseURL = process.env.UI_BASE_URL ?? 'http://localhost';
const authFile = path.join(__dirname, 'playwright/.auth/user.json');

/**
 * Поки setup не зберіг сесію, підставляємо порожній storageState,
 * щоб `npm test` не падав на відсутньому файлі.
 */
const userStorageState = fs.existsSync(authFile) ? authFile : { cookies: [], origins: [] };

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    ...devices['Desktop Chrome'],
    baseURL: uiBaseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'guest',
      testMatch: /0[12]-.*\.spec\.ts/,
      use: {
        storageState: { cookies: [], origins: [] },
      },
    },
    {
      name: 'user',
      testMatch: /0[34]-.*\.spec\.ts/,
      dependencies: ['setup'],
      use: {
        storageState: userStorageState,
      },
    },
  ],
});
