const { test } = require('@playwright/test');

test('add 4 todos', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const box = page.getByRole('textbox', { name: 'What needs to be done?' });

  for (const item of ['Test the application', 'Create an event', 'Delete it', 'Save it']) {
    await box.fill(item);
    await box.press('Enter');
  }
  await page.getByRole('listitem')
    .filter({ hasText: 'Create an event' })
    .getByRole('checkbox')
    .check();
});  