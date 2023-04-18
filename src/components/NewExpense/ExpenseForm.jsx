import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    };

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Amout</label>
                <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" value={enteredAmount} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Date</label>
                <input type="date" onChange={dateChangeHandler} min="2019-01-01" step="2022-12-31" value={enteredDate} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;