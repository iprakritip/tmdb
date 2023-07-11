/** @jest-environment jsdom */

import Button from './../../utils/Button';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  const mockedFn = jest.fn();
  const TestComponent = <Button label='Search' onClick={mockedFn} />;

  it('Renders Properly', () => {
    render(TestComponent);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick function', async () => {
    render(TestComponent);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
