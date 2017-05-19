import { AddPage } from './app.po';

describe('add App', () => {
  let page: AddPage;

  beforeEach(() => {
    page = new AddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
