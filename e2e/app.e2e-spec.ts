import { AppPage } from './app.po';

describe('test-e2e App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display all urls', () => {
    page.navigateTo();
    page.getAllLinks().then((links) => {
      console.log('Received links: ',  links);
      for (let i = 0; i < 10; i++) {
        console.log('navigating to: ', links[i]);
        page.openNewTab(links[i], 1, 5000);
    //    page.navigateToLink(element);
      }
      });
    });
  });

  // it('click on each url', () => {
  //   page = new AppPage();
  //   page.navigateTo();

  //   page.getAllAnchorElements().then((elements) => {
  //     console.log(elements.length);
  //     for (let i = 0; i < elements.length; i++) {
  //       const element = elements[i];
  //       element.click();
  //       page.pauseBrowser(10000);
  //     }
     
  //   });
  // });

