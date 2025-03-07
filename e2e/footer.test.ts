import { test, expect } from '@playwright/test'

test('should show the footer', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('footer')).toBeVisible()
})
