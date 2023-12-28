import React, {useState} from "react";

const ExpenseAmount = (props) => {
    // const amount = props.amount;

    const [amount, setAmount] = useState(props.amount)
const changeExpense = (props) => {
    setAmount('$100');
    console.log(amount);
}

    return (
        <div>
            <h2>{amount}</h2>
            <button onClick={changeExpense}>Change Expense</button>
        </div>
    )
}

export default ExpenseAmount;