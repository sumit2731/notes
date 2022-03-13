import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton).toHaveTextContent('Change to red');
  expect(colorButton.textContent).toBe('Change to red');
});



