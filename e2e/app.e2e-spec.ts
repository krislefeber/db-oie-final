import { HessenWebPage } from './app.po';

describe('hessen-web App', () => {
  let page: HessenWebPage;

  beforeEach(() => {
    page = new HessenWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
