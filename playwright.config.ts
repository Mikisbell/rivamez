import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'mobile-small',
      use: { ...devices['iPhone SE'], viewport: { width: 375, height: 667 } },
    },
    {
      name: 'mobile-large',
      use: { ...devices['iPhone 14 Pro Max'], viewport: { width: 430, height: 932 } },
    },
    {
      name: 'tablet',
      use: { ...devices['iPad Mini'], viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'laptop',
      use: { ...devices['MacBook Pro 13'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
    },
  ],
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
