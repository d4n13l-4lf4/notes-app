import React from 'react';
import { render, screen, waitForElement, configure, fireEvent } from '@testing-library/react';
import Home from './Home';
import userEvent from "@testing-library/user-event";

configure({'testIdAttribute': 'id'});

test('it should have a form to introduce a new note', () => {
    const { container } = render(<Home/>);
    const form = screen.getByTestId('form');
    expect(form).toBeVisible();
});

test('it should show a success alert after submitting a note', async () => {
    const { container, getByText } = render(<Home />);
    const form = screen.getByTestId('form');
    const descriptionInput = screen.getByTestId('description');
    await userEvent.type(descriptionInput, 'My first note');
    fireEvent.submit(form);
    const alertSuccess = await waitForElement(() => getByText('Note submitted successfully'), {container, timeout: 1000});
    expect(alertSuccess).toBeTruthy();
});

test('it should show an error message when trying to submit a note with empty description', () => {
    const { container, getByText } = render(<Home />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    const errorMessage = getByText('Description shouldn\'t be empty');
    expect(errorMessage).toBeInTheDocument();
});
