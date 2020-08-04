import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { createMemoryHistory } from 'history';
import { MemoryRouter as Router } from 'react-router-dom';

test('it should say "Hello to our notes app"', () => {

    const { getByText } = render(<Home />);

    expect(getByText("Hello to our notes app")).toBeInTheDocument();
});
