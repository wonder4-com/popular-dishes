const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
    browser = await puppeteer.launch({
        // headless: false, //opens up chromium window
        // slowMo: 80, // changes speed of the window load
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height});
});

afterAll(() => {
    browser.close();
})

describe('page on load', () => {
    beforeEach(async () => {
        await page.goto(pageUrl, {waitUntil: 'networkidle2'});
    })

    test('initial title should be correct', async () => {
     var div = '.category h3';
     const title = await page.$eval(div, e => e.textContent);
        expect(title).toEqual('Budget Categories')
    });

// click on a popup module
    xtest('can click on a photo and something pops up', async () => {
        var selector = FILL_ME_IN;
        await page.click(selector);
        
        var div = FILL_ME_IN // this will be the div box of the pop up component
        const title = await page.$eval(div, e => e.textContent);
        expect(title).toEqual(FILL_ME_IN) // this will be the title of the popup
    })
});