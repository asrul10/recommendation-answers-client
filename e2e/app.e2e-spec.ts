import { DemoAutoanswerPage } from './app.po';

describe('demo-autoanswer App', () => {
  let page: DemoAutoanswerPage;

  beforeEach(() => {
    page = new DemoAutoanswerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
