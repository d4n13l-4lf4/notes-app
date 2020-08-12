import NotFound from "./NotFound";
import {render, RenderResult} from "@testing-library/react";
import React from "react";

let notFoundComponent: RenderResult;

describe('Not found component test', () => {

    beforeEach(() => {
       notFoundComponent = render(<NotFound />);
    });

    test('should show a Sorry not found description', () => {
        const { getByText } = notFoundComponent;
        expect(getByText('Sorry! Page not found!')).toBeInTheDocument();
    });

});
