import { render, screen } from '@testing-library/react';
import xApp from './App';

test('renders learn react link', () => {
  render(<xApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
