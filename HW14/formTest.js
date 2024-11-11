const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testFormSubmission() {
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.addArguments('window-size=1920x1080');
    options.addArguments('no-sandbox');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://formy-project.herokuapp.com/form');

        const firstNameField = await driver.findElement(By.id('first-name'));
        await firstNameField.sendKeys('Peter');

        const lastNameField = await driver.findElement(By.id('last-name'));
        await lastNameField.sendKeys('Peterson');

        const jobTitleField = await driver.findElement(By.id('job-title'));
        await jobTitleField.sendKeys('tester');

        const educationRadio = await driver.findElement(By.id('radio-button-1'));
        await educationRadio.click();

        const sexCheckbox = await driver.findElement(By.id('checkbox-1'));
        await sexCheckbox.click();

        const experienceDropdown = await driver.findElement(By.id('select-menu'));
        await experienceDropdown.sendKeys('2-4');

        const dateField = await driver.findElement(By.id('datepicker'));
        await dateField.sendKeys('12/12/2020');

        const submitButton = await driver.findElement(By.css('.btn.btn-lg.btn-primary'));
        await submitButton.click();

        const successMessage = await driver.wait(
            until.elementLocated(By.css('.alert.alert-success')),
            5000
        );
        const successText = await successMessage.getText();
        assert.strictEqual(successText, 'The form was successfully submitted!', "Expected success message not found");

        console.log("Assertion passed: The form was successfully submitted!");
    } catch (error) {
        console.error("An assertion failed:", error.message);
    } finally {
        await driver.quit();
    }
})();