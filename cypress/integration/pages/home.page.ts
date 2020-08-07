
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

    getNoteInputText() {
        return cy.get('#description');
    }

    getSubmitButton() {
        return cy.get('#submit-note');
    }

    getSuccessAlert() {
        return cy.get('.alert-success');
    }

}
