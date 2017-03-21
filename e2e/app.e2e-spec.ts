import { EventoryPage } from './app.po';

describe('eventory App', () => {
  let page: EventoryPage;

  beforeEach(() => {
    page = new EventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
