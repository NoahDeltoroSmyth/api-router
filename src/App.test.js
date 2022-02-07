import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('user can view a list of characters and is directed to details on button click', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const character = await screen.findByRole('link', { name: /mooncake/i });
  expect(character).toBeInTheDocument();

  userEvent.click(character);

  const characterDetail = await screen.findByRole('heading', { name: /mooncake/i });
  expect(characterDetail).toBeInTheDocument();

  const species = screen.getByText(/species: mooncake's species/i);
  expect(species).toBeInTheDocument();
});
