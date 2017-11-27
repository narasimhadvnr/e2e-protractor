import { browser, by, element, protractor } from 'protractor';
import { WebElement } from 'selenium-webdriver';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://angular.io/events');
  }

  getParagraphText() {
    // return browser.driver.findElements(by.css('a')).;
  return browser.driver.findElement(by.css('h1'));
  }

  getAllLinks(): Promise <any> {
    return new Promise( (resolve) => {
      browser.driver.findElements(by.css('a')).then(
        (anchors: WebElement[]) => {
          resolve(this.parseLinks(anchors));
        }
       );
    });
  }

 parseLinks(anchors: WebElement[]): Promise<any> {
  const hrefs = [];
     const promises = [];
    for (let i = 0; i < anchors.length; i++) {
      promises.push( new Promise( (resolve) => {

        anchors[i].getAttribute('href').then( (link) => {
          resolve(link);
        } );
      } ));
    }
      // if(1/* add filtering here*/)
    return Promise.all(promises);
          // console.log(anchors[i].getAttribute('href'));
      }
      // console.log(hrefs);

      getAllAnchorElements(): Promise <any> {
        return new Promise( (resolve) => {
          browser.driver.findElements(by.css('a')).then(
            (anchors: WebElement[]) => {
              resolve(anchors);
            }
           );
        });
      }

  navigateToLinkNewTab(i)  {

    browser.getAllWindowHandles().then(function(handles) {
      const newTabHandle = handles[i];
      browser.switchTo().window(newTabHandle).then(function () {
          // Expect the newly opened tab URL to equal the href of the invitation
     //     expect(browser.driver.getCurrentUrl()).toContain("http://...");
      });
  });
  }

  // openNewTab() {
  //   const elm = element.all( by.css('div.blog-post > a') ).first();
  //   browser.actions().mouseMove(elm).keyDown(protractor.Key.SHIFT).click().keyUp(protractor.Key.SHIFT).perform();
  // }

  pauseBrowser(value) {
    const elm = element.all( by.css('div.blog-post > a') ).first();
    browser.sleep( 5000);
  }

  openNewTab(newPageToOpen, count, timeoutInMillis) {
    browser.executeScript('window.open()').then(function () {
      browser.getAllWindowHandles().then(function (handles) {
             const secondWindow = handles[count];
             browser.switchTo().window(secondWindow).then(function () {
                 const page = browser.get(newPageToOpen);
                 browser.sleep(timeoutInMillis);
                 setTimeout(() => {
                  browser.driver.close();
                  browser.driver.switchTo().window(handles[0]);
                }, timeoutInMillis );
             });
      });
 });
  }
}
