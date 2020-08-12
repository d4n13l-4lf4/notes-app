import React from 'react';
import { render, RenderResult, fireEvent, waitForElementToBeRemoved, waitForElement, createEvent } from './test-utils';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe('App initial page unit test', () => {

    let app: RenderResult;

    beforeEach(() => {
        app = render(<Router><App /></Router>);
    });

    test('it should be at url /home', () => {
        expect(window.location.pathname).toBe('/home');
    });


    test('it should have "Hello to your notes in page title"', () => {
        expect(document.title).toBe('Hello to your notes');
    });

    test('it should have an app bar which says Notes App', () => {
        const { getByTestId } = app;
        expect(getByTestId('app-bar-title')).toHaveTextContent('Notes App');
    })

    test('it should have a button to toggle the left menu', () => {
        const { getByTestId } = app;
        const toggleButton = getByTestId('menu-toggler');
        expect(toggleButton).toBeInTheDocument();
    });


    test('it should close the menu when Esc key is pressed', async () => {
        const { getByTestId } = app;
        const toggleButton = getByTestId('menu-toggler');
        userEvent.click(toggleButton);
        const menu = await waitForElement(() => getByTestId('menu'));
        await fireEvent.keyDown(menu, { key: 'Escape', code: 'Escape',  });
        await waitForElementToBeRemoved(() => getByTestId('menu'));
    });

    test('it should not close the menu when Tab key is pressed', async () => {
        const { getByTestId } = app;
        const toggleButton = getByTestId('menu-toggler');
        userEvent.click(toggleButton);
        const menu = await waitForElement(() => getByTestId('menu'));
        await fireEvent.keyDown(menu, { key: 'Tab', code: 'Tab'});
        expect(getByTestId('menu')).toBeInTheDocument();
    });

    test('it should not close the menu when Shift key is pressed', async () => {
        const { getByTestId } = app;
        const toggleButton = getByTestId('menu-toggler');
        userEvent.click(toggleButton);
        const menu = await waitForElement(() => getByTestId('menu'));
        await fireEvent.keyDown(menu, { key: 'Shift', code: 'ShiftLeft'});
        expect(getByTestId('menu')).toBeInTheDocument();
    });
});
