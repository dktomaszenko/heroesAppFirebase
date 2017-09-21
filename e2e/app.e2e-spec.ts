import { HeroesAppFirebasePage } from './app.po';

describe('heroes-app-firebase App', () => {
  let page: HeroesAppFirebasePage;

  beforeEach(() => {
    page = new HeroesAppFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
