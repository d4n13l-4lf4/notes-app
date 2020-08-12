import React from "react";
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from "./store/root-reducer";

function render(
    ui,
    {
        initialState,
        // eslint-disable-next-line no-undef
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
