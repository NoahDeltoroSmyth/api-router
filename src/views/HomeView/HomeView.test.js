import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeView from './HomeView';

test('HomeView renders a list of characters and their details', async () => {
  render(
    <MemoryRouter>
      <HomeView />
    </MemoryRouter>
  );

  const loading = screen.getByRole('heading', {
    name: /please stand by while we fetch your space data.../i,
  });
  expect(loading).toBeInTheDocument();

  const image = await screen.findByRole('img', { name: /mooncake/i }, { timeout: 4000 });
  expect(image).toBeInTheDocument();

  const altText = await screen.findByAltText(/mooncake/i);
  expect(altText).toBeInTheDocument();

  const header = screen.getByRole('heading', { name: /mooncake/i });
  expect(header).toBeInTheDocument();

  const allHeaders = await screen.findAllByRole('heading', { level: 1 });
  expect(allHeaders.length).toEqual(47);
});
