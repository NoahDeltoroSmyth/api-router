import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DetailView from './DetailView';

test('DetailView renders a characters details', async () => {
  render(
    <MemoryRouter>
      <DetailView />
    </MemoryRouter>
  );

  const loading = screen.getByRole('heading', {
    name: /fetching character information/i,
  });
  expect(loading).toBeInTheDocument();

  const heading = await screen.findByRole('heading', { label: /mooncake/i });
  expect(heading).toBeInTheDocument();

  const image = await screen.findByRole('img', { alt: /mooncake/i });
  expect(image).toBeInTheDocument();
});
