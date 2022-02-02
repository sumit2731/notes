import {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    
    //const [expenses, setExpenses] = useState(props.items);
    
    const filterChangeHandler = selectedYear => {
        
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return(
        <div>
            
            <Card className="expenses">
                
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                
                <ExpenseList items={filteredExpenses}></ExpenseList>

        
            </Card>
        </div>
    );
}

export default Expenses;