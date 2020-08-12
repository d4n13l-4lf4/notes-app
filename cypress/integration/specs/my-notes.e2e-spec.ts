import MyNotesPage from "../pages/my-notes.page";
import {HomePage} from "../pages/home.page";

describe('My notes e2e test', () => {

    it('should show me a title which says "Your awesome notes are here"', () => {
        let myNotesPage = new MyNotesPage();
        // Given I am at /my-notes page
        myNotesPage.navigateTo();
        // it should show say your awesome notes are here
        myNotesPage.getPageTitle().should('contain', 'Your awesome notes are here');
    });


    it.skip ('should show the note i have recently added', () => {
        let homePage = new HomePage();

        //Given I am at /home page
        homePage.navigateTo();

        // When I type some description to add a note
        homePage.getNoteInputText().type('My awesome note');

        // And press the submit button
        homePage.getSubmitButton().click();

        let myNotesPage = new MyNotesPage();

        // And I go to my-notes page
        myNotesPage.navigateTo();

        // Then It should show the last note i added
        myNotesPage.getNoteItem().should(($items) => {
            expect($items.first()).to.contain('My awesome note');
        });
    });

});
