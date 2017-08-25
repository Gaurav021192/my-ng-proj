import { NgDirectoryPage } from './app.po';

describe('ng-directory App', () => {
  let page: NgDirectoryPage;

  beforeEach(() => {
    page = new NgDirectoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
