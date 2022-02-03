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

  const image = await screen.findByRole('img', { label: /mooncake/i }, { timeout: 4000 });
  expect(image).toBeInTheDocument();

  const species = await screen.findByText(/species:/i);
  expect(species).toBeInTheDocument();

  const origin = await screen.findByText(/origin:/i);
  expect(origin).toBeInTheDocument();

  const status = await screen.findByText(/dead or alive/i);
  expect(status).toBeInTheDocument();

  const button = await screen.findByRole('button', { name: /go back/i });
  expect(button).toBeInTheDocument();
});
