import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('controlPopover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });

  test('controlPopover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('.btn');
    btn.click();
    await page.waitForSelector('[data-toggle=show]');
    btn.click();
    await page.waitForSelector('[data-toggle=hidden]');
  });
});
