import { KvetchPage } from './app.po';

describe('kvetch App', () => {
  let page: KvetchPage;

  beforeEach(() => {
    page = new KvetchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
