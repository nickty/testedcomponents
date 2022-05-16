import { render, screen } from '@testing-library/react';
import App from './App';


// testing by text inside the document
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// testing by finding list time by finding with role
test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(4)
});

// testing by id
test('test the title', () => {
  render(<App />);
  const listItems = screen.getByTestId("mytestid");
  expect(listItems).toBeInTheDocument()
});

// Test by getting after title
test('test the sum', () => {
  render(<App />);
  const listItems = screen.getByTitle("sum");
  expect(listItems).toBeInTheDocument()
});
