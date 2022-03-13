import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces} from './App';


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
  let checkbox = screen.getByRole('checkbox',{name: 'Disable Button'});
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});
  
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});


test('Dsiabled button has gray background and reverts to red', () => {
  render(<App></App>);
  let checkbox = screen.getByRole('checkbox',{name: 'Disable Button'});
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('Click disabled button has gray background and reverts to blue', () => {
  render(<App></App>);
  let checkbox = screen.getByRole('checkbox',{name: 'Disable Button'});
  let colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('red')).toBe('red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for mulpitale inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});



