import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

test('should not have accessibility violations', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')

  await injectAxe(page)

  await checkA11y(page, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})
