import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const searchInput = element(by.id('input-search'));
  const btnTransferMenu = element(by.id('btn-transfer-menu'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('My App');
  });

  it('should display initial transfers on list', () => {
    page.navigateTo();
    expect(page.getListCount()).toEqual(5);
  });

  it('should filter by account holder', () => {
    page.navigateTo();
    searchInput.sendKeys('Penelope');
    expect(page.getListCount()).toEqual(1);
  });

  it('should filter by note', () => {
    page.navigateTo();
    searchInput.sendKeys('Sed');
    expect(page.getListCount()).toEqual(2);
  });

  it('should delete a transfer', () => {
    page.navigateTo();
    element.all(by.css('.mat-table .mat-row')).get(0).$('.btn-transfer-menu').click();
    element(by.css('.cdk-overlay-pane')).$('.btn-transfer-menu-delete').click();
    element(by.css('.btn-confirm-delete')).click();
    expect(element.all(by.css('.mat-table .mat-row')).count()).toEqual(4);
  });

  it('should create a new transfer', () => {
    page.navigateTo();
    element(by.css('#btn-add-transfer')).click();
    element(by.css('#form-create')).$('#accountHolder').sendKeys('Ken Smith');
    element(by.css('#form-create')).$('#IBAN').sendKeys('DE27100777770209299700');
    element(by.css('#form-create')).$('#amount').sendKeys('100,00');
    element(by.css('#form-create')).$('#date').sendKeys('01.05.2022');
    element(by.css('#form-create')).$('#note').sendKeys('This is a new transaction');
    element(by.css('#form-create')).$('#btn-save').click();
    expect(element.all(by.css('.mat-table .mat-row')).count()).toEqual(6);
  });

  it('should update a transfer', () => {
    page.navigateTo();
    searchInput.sendKeys('Penelope Berry');
    element.all(by.css('.mat-table .mat-row')).get(0).$('.btn-transfer-menu').click();
    element(by.css('.cdk-overlay-pane')).$('.btn-transfer-menu-edit').click();
    element(by.css('#form-update')).$('#accountHolder').sendKeys('Mark Harris');
    element(by.css('#form-update')).$('#btn-save').click();
    searchInput.clear();
    searchInput.sendKeys('Mark Harris');
    expect(element.all(by.css('.mat-table .mat-row')).count()).toEqual(1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
