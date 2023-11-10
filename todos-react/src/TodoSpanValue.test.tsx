import { test, expect, beforeEach } from 'vitest';
import { setTimeout } from 'node:timers/promises'
import {render, screen, act} from '@testing-library/react'
import ReactDOM from 'react-dom/client'
import TodoSpanValue from './TodoSpanValue';
import '@testing-library/jest-dom/vitest'

beforeEach(() => {
  document.body.innerHTML = '';
})

test('TodoSpanValue renders', () => {
  ReactDOM.createRoot(document.body).render(
    <TodoSpanValue value='ABC' />,
  );
});

// Problèmes
// le render est async
// ça oblige à attendre la fin du render
// (on doit faire mieux que await setTimeout(1000))
// Vitest/Jest exécutent les test dans Node 
// et donc les API web (window, document, location, fetch...)
// sont émulés via une bibliothèque (ici JSDOM)
// problème JSDOM n'implémente pas (à l'heure actuelle) innerText
// (avec textContent le test passe)
test('TodoSpanValue renders prop value', async () => {
  ReactDOM.createRoot(document.body).render(
    <TodoSpanValue value='ABC' />,
  );

  await setTimeout(1000);

  const spanEl = document.querySelector('.TodoSpanValue') as HTMLSpanElement;
  expect(spanEl.textContent).toBe('ABC');
});

// act permet d'attendre que tous les callbacks async aient été exécuté
// intéressant pour render sur lequel on a pas le controle sur le code async
// (render ne retourne pas de promesses)
test('TodoSpanValue renders prop value', () => {
  act(() => {
    ReactDOM.createRoot(document.body).render(
      <TodoSpanValue value='ABC' />,
    );
  })

  const spanEl = document.querySelector('.TodoSpanValue') as HTMLSpanElement;
  expect(spanEl.textContent).toBe('ABC');
});

// au lieu d'appeler render de ReactDOM, on peut appeler une version
// simplifier qui vient de testing-library
test('TodoSpanValue renders prop value', () => {
  render(<TodoSpanValue value='ABC' />);
  screen.getByText('ABC');
});

test('TodoSpanValue renders prop value', () => {
  render(<TodoSpanValue value='ABC' />);
  expect(screen.queryByText('ABC')).not.toBeNull();
});

test('TodoSpanValue renders prop value', () => {
  render(<TodoSpanValue value='ABC' />);
  expect(screen.queryByText('ABC')).toBeInTheDocument();
});