import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(4)
});

test('test the title', () => {
  render(<App />);
  const listItems = screen.getByTestId("mytestid");
  expect(listItems).toBeInTheDocument()
});

test('test the sum', () => {
  render(<App />);
  const listItems = screen.getByTitle("sum");
  expect(listItems).toBeInTheDocument()
});
