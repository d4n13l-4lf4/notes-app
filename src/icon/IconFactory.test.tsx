import {IconFactory} from "./IconFactory";

describe('Icon factory test',() => {

    let iconFactory: IconFactory;

    beforeEach(() => {
        iconFactory = new IconFactory();
    });

    it ('should return an Add Icon component', () => {
        const addIconComponent = iconFactory.createIcon('add');
        expect(addIconComponent).toBeTruthy();
    });

    it ('should return an Note Icon component', () => {
        const noteIcon = iconFactory.createIcon('note');
        expect(noteIcon).toBeTruthy();
    });

    it ('should return undefined when an icon is not found', () => {
       const unknownIcon = iconFactory.createIcon('I do not exist');
       expect(unknownIcon).toBeUndefined();
    });
});
