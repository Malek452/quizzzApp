import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first quiz question', () => {
  render(<App />);
  const questionElement = screen.getByText(/Quel animal est-ce/);
  expect(questionElement).toBeInTheDocument();
});
