const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testTableSorting() {
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.addArguments('window-size=1920x1080');
    options.addArguments('no-sandbox');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://the-internet.herokuapp.com/tables');

        const secondTable = await driver.findElement(By.id('table2'));
        await driver.executeScript("arguments[0].scrollIntoView();", secondTable);

        const dueColumnHeader = await secondTable.findElement(By.xpath('//span[text()="Due"]'));
        await dueColumnHeader.click();

        await driver.sleep(1000);
        const dueCells = await secondTable.findElements(By.xpath('//table[@id="table2"]/tbody/tr/td[4]'));

        const dueValues = [];
        for (let cell of dueCells) {
            const text = await cell.getText();
            dueValues.push(parseFloat(text.replace('$', '')));
        }
        const isSorted = dueValues.every((value, index) => index === 0 || dueValues[index - 1] <= value);
        assert.strictEqual(isSorted, true, "Expected the 'Due' column to be sorted in ascending order");

        console.log("Assertion passed: The 'Due' column is sorted in ascending order.");
    } catch (error) {
        console.error("An assertion failed:", error.message);
    } finally {
        await driver.quit();
    }
})();