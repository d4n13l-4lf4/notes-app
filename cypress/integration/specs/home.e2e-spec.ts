import { HomePage } from "../pages/home.page";


describe('Home page e2e test', () => {
    let homePage: HomePage;
    const MAX_WAIT = 500; // ms

    beforeEach(() => {
       homePage = new HomePage();
       homePage.navigateTo();

    });


    it('should have "Hello to your notes" in page\'s title', () => {
        homePage.getTitle().should('eq', "Hello to your notes");
    });

    it('should show a form to introduce a new note', () => {
        homePage.getForm().should('be.visible');
    });

    it('should show a success message when submitting a note', () => {
        homePage.getNoteInputText().type('My first note');
        homePage.getSubmitButton().click();
        cy.wait(MAX_WAIT);
        homePage.getSuccessAlert().should('be.visible');
    })

    it('should show have the submit button disabled when submitting a note\'s with an empty description', () => {
        homePage.getSubmitButton().should('be.disabled');
    });

    it ('should dismiss the success message after 5s', () => {
            homePage.getNoteInputText().type('My first note');
            homePage.getSubmitButton().click();
            cy.wait(6000);
            homePage.getSuccessAlert().should('not.be.visible');
    });
});
