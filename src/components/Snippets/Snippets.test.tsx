import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Snippets from './Snippets';

describe('<Snippets />', () => {
  test('it should mount', () => {
    render(<Snippets />);
    
    const snippets = screen.getByTestId('Snippets');

    expect(snippets).toBeInTheDocument();
  });
});