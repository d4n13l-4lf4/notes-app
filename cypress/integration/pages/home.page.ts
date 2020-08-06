
export class HomePage {

    navigateTo() {
        cy.visit('/home');
    }

    getTitle() {
        return cy.title();
    }

    getForm() {
        return cy.get('#form');
    }

}
