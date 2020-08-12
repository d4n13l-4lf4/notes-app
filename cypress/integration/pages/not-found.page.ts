
export default class NotFoundPage {

    private NON_EXISTENT_URL = 'i-do-not-exist';

    navigateTo() {
        cy.visit(this.NON_EXISTENT_URL);
    }

    getPageText() {
        return cy.get('[data-testid="description"]');
    }
}
