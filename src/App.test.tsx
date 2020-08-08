import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';

test('it should be at url /home', () => {

  render(
      <Router>
        <App/>
      </Router>
  )

  expect(window.location.pathname).toBe('/home');
});


test('it should have "Hello to your notes in page title"', () => {

    const {} = render(
        <Router>
            <App/>
        </Router>
    )

    expect(document.title).toBe('Hello to your notes');
});
