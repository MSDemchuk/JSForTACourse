const { Builder, By, until, Actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testHoverOverAvatar() {
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.addArguments('window-size=1920x1080');
    options.addArguments('no-sandbox');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        const avatar = await driver.findElement(By.css('.figure'));

        const actions = driver.actions({ async: true });
        await actions.move({ origin: avatar }).perform();
        const caption = await driver.wait(until.elementLocated(By.css('.figure .figcaption h5')), 5000);

        const captionText = await caption.getText();
        assert.strictEqual(captionText, 'name: user1', 'Expected caption to display "name: user1"');

        console.log("Assertion passed: Caption displays 'name: user1'.");
    } catch (error) {
        console.error("An assertion failed:", error.message);
    } finally {
        await driver.quit();
    }
})();
