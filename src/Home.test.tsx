import React from 'react';
import { render, screen, waitForElement, configure, fireEvent } from '@testing-library/react';
import Home from './Home';
import { createMemoryHistory } from 'history';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

configure({'testIdAttribute': 'id'});

test('it should have a form to introduce a new note', () => {
    const { container } = render(<Home/>);
    const form = screen.getByTestId('form');
    expect(form).toBeVisible();
});

test('it should show a success alert after submitting a note', async () => {
    const { container, getByText } = render(<Home />);
    const submitButton = screen.getByTestId('submit-note');
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    const alertSuccess = await waitForElement(() => getByText('Note submitted successfully'), {container, timeout: 1000});
    expect(alertSuccess).toBeTruthy();
});
