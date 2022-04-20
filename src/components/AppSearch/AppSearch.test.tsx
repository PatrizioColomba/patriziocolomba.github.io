import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppSearch from './AppSearch';

describe('<AppSearch />', () => {
  test('it should mount', () => {
    render(<AppSearch />);
    
    const appSearch = screen.getByTestId('AppSearch');

    expect(appSearch).toBeInTheDocument();
  });
});