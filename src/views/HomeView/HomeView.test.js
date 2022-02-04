import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeView from './HomeView';

test.only('HomeView renders a list of characters and their details', async () => {
  render(
    <MemoryRouter>
      <HomeView />
    </MemoryRouter>
  );

  const loading = screen.getByRole('heading', {
    name: /please stand by while we fetch your space data.../i,
  });
  expect(loading).toBeInTheDocument();

  const image = await screen.findByRole('img', { name: /mooncake/i });
  expect(image).toBeInTheDocument();

  const altText = screen.getByAltText(/gatekeeper/i);
  expect(altText).toBeInTheDocument();

  const header = screen.getByRole('heading', { name: /mooncake/i });
  expect(header).toBeInTheDocument();

  const allHeaders = screen.getAllByRole('heading', { level: 1 });
  expect(allHeaders.length).toEqual(47);
});
