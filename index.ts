import { chromium } from 'playwright';

(async () => {
  // Launch a browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://www.thinkpalm.com');

  // Take a screenshot of the page
  await page.screenshot({ path: 'example.png' });

  // Close the browser
  await browser.close();
})();