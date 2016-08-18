import { PonytailsPage } from './app.po';

describe('ponytails App', function() {
  let page: PonytailsPage;

  beforeEach(() => {
    page = new PonytailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
