import NotFoundPage from "../pages/not-found.page";


describe('Not found e2e', () => {

    let notFoundPage: NotFoundPage;

    beforeEach(() => {
        notFoundPage = new NotFoundPage();
        notFoundPage.navigateTo();
    });


    it('should show a text description which say\'s sorry not found', () => {
       notFoundPage.getPageText().should('contain', 'Sorry! Page not found!');
    });
});
