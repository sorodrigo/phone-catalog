import { PhoneCataloguePage } from './app.po';

describe('phone-catalogue App', () => {
  let page: PhoneCataloguePage;

  beforeEach(() => {
    page = new PhoneCataloguePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
