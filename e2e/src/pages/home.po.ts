import {browser, by, element} from "protractor";

export class HomePage {

    path = new URL('home', browser.baseUrl).toString();

    navigateTo() {
        return browser.get(this.path) as Promise<any>;
    }


    getTitle() {
        return browser.getTitle() as Promise<string>;
    }
}
