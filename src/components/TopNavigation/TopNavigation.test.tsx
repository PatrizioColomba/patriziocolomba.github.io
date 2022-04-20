import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopNavigation from './TopNavigation';

describe('<TopNavigation />', () => {
  test('it should mount', () => {
    render(<TopNavigation />);
    
    const topNavigation = screen.getByTestId('TopNavigation');

    expect(topNavigation).toBeInTheDocument();
  });
});