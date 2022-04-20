import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stack from './Stack';

describe('<Stack />', () => {
  test('it should mount', () => {
    render(<Stack />);
    
    const stack = screen.getByTestId('Stack');

    expect(stack).toBeInTheDocument();
  });
});