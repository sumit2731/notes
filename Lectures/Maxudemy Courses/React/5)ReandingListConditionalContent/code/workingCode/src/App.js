import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    
    //expenses.push({id: 'e5', ...expense});
    setExpenses(prevExpenses => [  expense, ...prevExpenses]);
    //console.log(expense);
  }
  
  /**
   * @Desc This is older syntax and jsx code is converted to this code only
   * @param1 Html elmenet to be created
   * @param2 object which represents the attributes of elment created via param1
   * @param3 , @param4 - childs of elemnt created by @param1
   */
  // return React.createElement(
  //   'div', 
  //   {},
  //   React.createElement('h2', {}, "Let's get Started"),
  //   React.createElement(Expenses, {items:expenses}),
  //   );
  
  return (
    
    <div>
      
      
      <NewExpense onAddExpense= {addExpenseHandler}></NewExpense>
      
      <Expenses items={expenses} />
    
    </div>
  );
}

export default App;
