
export default class BasePage {

    private readonly PATH: string;

    constructor(path: string) {
        this.PATH = path
    }

    public navigateTo() {
        cy.visit(this.PATH);
    }

}
