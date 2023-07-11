/** @jest-environment jsdom */

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Banner from '../Banner/Banner';

describe('Banner', () => {
  const TestComponent = <Banner />;

  it('displays banner text', () => {
    render(TestComponent);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
  it('renderes input', () => {
    render(TestComponent);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('renderes search button', () => {
    render(TestComponent);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
