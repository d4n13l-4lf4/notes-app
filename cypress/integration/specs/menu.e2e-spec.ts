import {MenuPage} from "../pages/menu.page";


describe('Menu e2e test', () => {
    let menuPage: MenuPage;
    const MAX_WAIT = 500; // ms

    beforeEach(() => {
        menuPage = new MenuPage();
        menuPage.navigateTo();

    });

    it ('should show a bar with the name Notes App', () => {
       menuPage.getAppBar().should('be', 'Notes App');
    });

    it('should have a new note menu', () => {
        menuPage.getToggleMenuButton().click();
        menuPage.getNewNoteMenu().should('be.visible');
    });

    it ('should have a new note menu whose text is New note', () => {
        menuPage.getToggleMenuButton().click();
        menuPage.getNewNoteMenu().should('contain', 'New note');
    });

    it ('should have a button to toggle the left menu', () => {
        menuPage.getToggleMenuButton().should('exist');
    });

    it ('should show the left menu after pressing the menu button', () => {
        menuPage.getToggleMenuButton().click();
        menuPage.getLeftMenu().should('be.visible');
    });
});
