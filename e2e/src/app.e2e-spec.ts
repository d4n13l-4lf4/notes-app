import {HomePage} from "./pages/home.po";

describe('Home page test suite', function () {
    let homePage: HomePage;

    beforeEach(() => {
       homePage = new HomePage();
    });

    it('should have "Hello to our notes app" in page title', () => {
       homePage.navigateTo();
       expect(homePage.getTitle()).toBe("Hello to our notes app");
    });

});
