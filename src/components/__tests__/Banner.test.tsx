/** @jest-environment jsdom */

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Banner from '../Banner/Banner';

describe('Banner',()=>{
    const TestComponent= (<Banner/>)
    render(TestComponent);
    
    it('displays banner text',()=>{
        expect(screen.getByText('Welcome')).toBeInTheDocument();
    })
})