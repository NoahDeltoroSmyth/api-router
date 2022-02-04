import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DetailView from './DetailView';

test.skip('DetailView renders a characters details', async () => {
  render(
    <MemoryRouter initialEntries={['/detail/2']}>
      <Route path="/detail/:id" component={DetailView} />
    </MemoryRouter>
  );
  const loading = await screen.findByRole('heading', {
    name: /fetching character information/i,
  });
  expect(loading).toBeInTheDocument();
  const heading = await screen.findByRole('heading', { name: /mooncake/i });
  expect(heading).toBeInTheDocument();

  const image = await screen.findByRole('img', { name: /mooncake/i });
  expect(image).toBeInTheDocument();

  const species = screen.getByText(/species: mooncake's species/i);
  expect(species).toBeInTheDocument();

  const origin = screen.getByText(/origin: outer space/i);
  expect(origin).toBeInTheDocument();

  const status = screen.getByText(/dead or alive\?: unknown/i);
  expect(status).toBeInTheDocument();

  const button = await screen.findByRole('button', { name: /go back/i });
  expect(button).toBeInTheDocument();
});
