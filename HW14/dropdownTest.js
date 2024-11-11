const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testDropdownState() {
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.addArguments('window-size=1920x1080');
    options.addArguments('no-sandbox');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://the-internet.herokuapp.com/dropdown');

        const dropdown = await driver.findElement(By.id('dropdown'));
        await driver.wait(until.elementIsVisible(dropdown), 5000);
        const options = await dropdown.findElements(By.tagName('option'));

        const isFirstOptionDisabled = await options[0].getAttribute('disabled') !== null;
        assert.strictEqual(isFirstOptionDisabled, true, "Expected the first option to be inactive (disabled)");

        const isSecondOptionEnabled = await options[1].isEnabled();
        assert.strictEqual(isSecondOptionEnabled, true, "Expected the second option to be active (enabled)");

        console.log("All assertions passed.");
    } catch (error) {
        console.error("An assertion failed:", error.message);
    } finally {
        await driver.quit();
    }
})();
