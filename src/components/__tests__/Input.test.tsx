/** @jest-environment jsdom */

import Input from './../../utils/Input';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Input component', () => {
  const mockedFn = jest.fn();
  const TestComponent = (
    <Input placeholder='Search..' type='text' onChange={mockedFn} />
  );

  it('Renders Properly', () => {
    render(TestComponent);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('changes value on typing', async () => {
    render(TestComponent);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'something');
    expect(input).toHaveValue('something');
  });
  it('calls onChange on typing', async () => {
    render(TestComponent);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'something');
    expect(mockedFn).toHaveBeenCalled();
  });
});
