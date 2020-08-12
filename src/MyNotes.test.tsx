import MyNotes from "./MyNotes";
import { RenderResult, render } from "./test-utils";
import React from "react";

describe('My notes test', () => {

    let myNotesComponent: RenderResult;

    beforeEach(() => {
        myNotesComponent = render(<MyNotes />);
    });


    test('it should show "Your awesome notes are here"', () => {
       const { getByText } = myNotesComponent;
       expect(getByText('Your awesome notes are here')).toBeInTheDocument();
    });
})
