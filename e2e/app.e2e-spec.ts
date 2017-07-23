import { BapPage } from './app.po';

describe('bap App', () => {
  let page: BapPage;

  beforeEach(() => {
    page = new BapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
