import { ACAPage } from './app.po';

describe('aca App', () => {
  let page: ACAPage;

  beforeEach(() => {
    page = new ACAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
