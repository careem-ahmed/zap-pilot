var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require("selenium-webdriver/testing"),
    proxy = require('selenium-webdriver/proxy');

test.describe('Mars Air Pilot Test', function() {
  var driver;

  test.before(function() {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setProxy(proxy.manual({http: '127.0.0.1:8090'}))
        .build();
  });

  test.it('Simple Test', function() {

      this.timeout(15000);
      driver.get('http://careem.marsair.tw/');
      this.timeout(15000);
      driver.wait(until.elementLocated(By.css('div#wrapper div#content > h2')), 15000);
      driver.findElement(By.id('promotional_code')).sendKeys('webdriver');
      driver.findElement(By.css("input[type='submit']")).click();
//   driver.wait(until.elementLocated(By.id('wrapper')), 3000);
  });

  test.after(function() {
    driver.quit();
  });
});
