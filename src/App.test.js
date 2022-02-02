import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('app renders loading message', () => {
  render(<App />);
  const linkElement = screen.getByText(/please stand by while we fetch your space data.../i);
  expect(linkElement).toBeInTheDocument();
});
