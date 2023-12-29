import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

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
        console.log(expenseData);
        }

    return (
        <form onClick={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-btn">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;