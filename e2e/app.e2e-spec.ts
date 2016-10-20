import { WsElementsPage } from './app.po';

describe('ws-elements App', function() {
  let page: WsElementsPage;

  beforeEach(() => {
    page = new WsElementsPage();
  });

  it('should display main title', () => {
    page.navigateTo();
    expect(page.getMainTitle()).toEqual('Steps to add a new element to this project');
  });
});
