// import React, {useState} from 'react';

import ExpenseTitleAmount from './ExpenseTitleAmount';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import { click } from '@testing-library/user-event/dist/click';

const ExpenseItem = (props) => {


    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated')
    //     console.log(title);
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
        <div className='expense-item-description'>
            <ExpenseTitleAmount title={props.title}/>
            {/* <h2>{title}</h2> */}
        </div>
        <div className='expense-item-price'>
            <ExpenseAmount amount={props.amount}/>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
        {/* <button>Delete Expense</button> */}
        </Card>
    )
}

export default ExpenseItem;