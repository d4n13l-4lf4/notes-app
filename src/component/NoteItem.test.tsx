import { RenderResult, render } from "../test-utils";
import NoteItem from "./NoteItem";
import React from "react";

describe('Card item component test', () => {

    let cardItemComponent: RenderResult;
    let initialState = {
      notes: [{
          id: 1,
          description: 'My note'
      }]
    };

    beforeEach(() => {
       cardItemComponent = render(<NoteItem note={initialState.notes[0]} />);
    });


    test('it should show My note as a description', () => {
        const { getByText } = cardItemComponent;
        expect(getByText(initialState.notes[0].description)).toBeInTheDocument();
    });

});
