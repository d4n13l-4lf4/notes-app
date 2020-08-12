import React from 'react';
import { render, screen, waitForElement, wait, fireEvent, waitForElementToBeRemoved } from './test-utils';
import Home from './Home';
import userEvent from "@testing-library/user-event";

//configure({'testIdAttribute': 'id'});

test('it should have a form to introduce a new note', () => {
    render(<Home/>);
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

test('it should show an error message when trying to submit a note with empty description', async () => {
    const { container, getByText } = render(<Home />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    const errorMessage = await waitForElement(() => getByText('Required'), {container, timeout: 1000})
    expect(errorMessage).toBeInTheDocument();
});

test('it should have a submit button blocked when invalid input is typed', async () => {
    const { getByTestId } = render(<Home />);
    const descriptionInput = screen.getByTestId('description');
    await userEvent.type(descriptionInput, 'asdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas');
    const submitButton = getByTestId('submit-note');
    await wait(() => {
        expect(submitButton).toBeDisabled();
    }) ;
});

test('it should not have the success message after 5s', async () => {
    jest.setTimeout(7000);
    const { container, getByText } = render(<Home />);
    const form = screen.getByTestId('form');
    const descriptionInput = screen.getByTestId('description');
    await userEvent.type(descriptionInput, 'My first note');
    fireEvent.submit(form);
    await waitForElement(() => getByText('Note submitted successfully'), {container, timeout: 1000});
    await waitForElementToBeRemoved(() => getByText('Note submitted successfully'), { timeout: 7000});
});

