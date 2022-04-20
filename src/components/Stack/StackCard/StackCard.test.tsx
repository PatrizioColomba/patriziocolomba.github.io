import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StackCard from './StackCard';

describe('<StackCard />', () => {
  test('it should mount', () => {
    render(<StackCard title='test'/>);
    
    const stackCard = screen.getByTestId('StackCard');

    expect(stackCard).toBeInTheDocument();
  });
});