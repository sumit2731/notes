import {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {id: Math.random().toString() ,...enteredExpenseData};
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    
    return (
        <div className="new-expense">
            {isEditing ? 
                (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />)
                :
                (<button onClick={startEditingHandler}>Add New Expense</button>)
                
            }
            
            
        </div>
    );
}

export default NewExpense;

