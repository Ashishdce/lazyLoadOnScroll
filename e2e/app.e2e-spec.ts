import { LazyLoadPage } from './app.po';

describe('lazy-load App', () => {
  let page: LazyLoadPage;

  beforeEach(() => {
    page = new LazyLoadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
