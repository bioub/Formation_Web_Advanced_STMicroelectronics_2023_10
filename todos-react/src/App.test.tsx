import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test, vitest } from 'vitest';
import App from './App';
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';

beforeEach(() => {
  document.body.innerHTML = '';
})

test('App renders', () => {
  render(<App />);
});

test('App renders with data from REST API', async () => {
  render(<App />);

  const element = await screen.findByText('delectus aut autem');
  expect(element).toBeInTheDocument()
});

test('App renders with mock', async () => {
  const originalFetch = global['fetch'];
  global['fetch'] = vitest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([{id: 1, title: 'ABC', completed: true}]),
    })
  );

  render(<App />);

  const element = await screen.findByText('ABC');
  expect(element).toBeInTheDocument()

  global['fetch'] = originalFetch;
});



test('App renders with data', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Type a todo");

  // userEvent.type enchaine tous les événement qu'aurait fait un utiliser
  // d'abord cliquer sur le champs pour le sélectionner
  // tapper la lettre D
  // attendre quelques ms
  // tapper la lettre E
  // ...
  await userEvent.clear(input);
  await userEvent.type(input, 'DEF');

  await userEvent.click(screen.getByText('+'));

  expect(screen.getByText('DEF')).toBeInTheDocument();
});