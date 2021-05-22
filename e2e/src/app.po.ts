import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.pepe')).getText() as Promise<string>;
  }

  getListCount(): Promise<number> {
    return element.all(by.css('.mat-table .mat-row')).count() as Promise<number>;
  }
}
