import { render, screen } from '@testing-library/react';
import App from './App';

test('test message', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
