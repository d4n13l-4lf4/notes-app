import { HomePage } from "../pages/home.page";

describe('Home page e2e test', () => {
    let homePage: HomePage;

    beforeEach(() => {
       homePage = new HomePage();
    });


    it('should have "Hello to your notes" in page\'s title', () => {
        homePage.navigateTo();
        homePage.getTitle().should('eq', "Hello to your notes");
    });

    it('should show a form to introduce a new note', () => {
        homePage.getForm().should('be.visible');
    });

    it('should show a success message when submitting a note', () => {
        homePage.getNoteInputText().type('My first note');
        homePage.getSubmitButton().click();
        cy.wait(500);
        homePage.getSuccessAlert().should('be.visible');
    })
});
