const { Given, When, Then, AfterAll } = require('cucumber')
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {
  "w3c": false
});
const driver = new Builder().withCapabilities(capabilities).build();

Given('I go to google.com', async () => {
  await driver.get('http://www.google.com');
});

When('I search for {string}', async (text) =>{
  const element = await driver.findElement(By.name('q'));
  element.sendKeys(text, Key.RETURN);
  element.submit();
});

Then('I should see 10 results', ()=>{

});


AfterAll('end', async function(){
  await driver.quit();
});

