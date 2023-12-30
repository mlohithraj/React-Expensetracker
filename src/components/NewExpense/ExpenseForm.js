import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [oldTitle, setNewTitle] = useState('');
    const [oldAmount, setNewAmount] = useState('');
    const [oldDate, setNewDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     setNewTitle: '',
    //     setNewAmount: '',
    //     setNewDate: ''
    // })

     const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setNewTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, setNewTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setNewAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, setNewAmount: event.target.value }
        // })
    }

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setNewDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, setNewDate: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
       
        const expenseData = {
            title: oldTitle,
            Amount: oldAmount,
            Date: new Date(oldDate)
        }
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
        }

    return (
        <form >
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={oldTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" value={oldAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" value={oldDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-btn">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;