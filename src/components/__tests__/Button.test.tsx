/** @jest-environment jsdom */

import Button from './../../utils/Button';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Button component', () => {
  const mockedFn = jest.fn();
  const TestComponent = (<Button label='Search' onClick={mockedFn} />);

  it('Renders Properly', () => {
    render(TestComponent);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
