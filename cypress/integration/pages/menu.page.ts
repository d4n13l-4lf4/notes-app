
export class MenuPage {

    navigateTo() {
        cy.visit('/')
    }

    getNewNoteMenu() {
        return cy.get("[href='/home']");
    }

    getAppBar() {
        return cy.get('[data-testid="app-bar-title"]');
    }

    getToggleMenuButton() {
        return cy.get('[data-testid="menu-toggler"]');
    }

    getLeftMenu() {
        return cy.get('[data-testid="menu"]');
    }

}
