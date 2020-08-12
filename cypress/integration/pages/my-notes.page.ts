import BasePage from "./base.page";

export default class MyNotesPage extends BasePage{

    constructor() {
        super('/my-notes');
    }

    getNoteListContainer() {
        return cy.get('[data-testid="notes-container"]');
    }


    getNoteItem() {
        return cy.get('[data-testid="note-item"]');
    }

    getPageTitle() {
        return cy.get('[data-testid="page-title"]');
    }

}
