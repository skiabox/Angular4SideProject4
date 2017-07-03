import { Angular4SideProject4Page } from './app.po';

describe('angular4-side-project4 App', () => {
  let page: Angular4SideProject4Page;

  beforeEach(() => {
    page = new Angular4SideProject4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
