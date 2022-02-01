import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/please stand by while we fetch your space data.../i);
  expect(linkElement).toBeInTheDocument();
});
