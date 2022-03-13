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

test('intit conditions', () => {
  render(<App></App>);
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  
  let checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});;

test('checkbox disabled the button on first click and enables on second click', () => {
  render(<App></App>);
  let checkbox = screen.getByRole('checkbox');
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});
  
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();


})



