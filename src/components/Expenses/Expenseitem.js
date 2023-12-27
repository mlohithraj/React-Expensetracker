import ExpenseTitleAmount from './ExpenseTitleAmount';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import { click } from '@testing-library/user-event/dist/click';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('clicked');
    }

    const deleteButton = () => {
       const expenseItems1 = document.getElementsByClassName('.expense-item-price')
       expenseItems1.onClick = expenseItems1.remove();
    //    expenseItems1.remove();
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
        <div className='expense-item-description'>
            <ExpenseTitleAmount title={props.title}/>
        </div>
        <div className='expense-item-price'>
            <ExpenseTitleAmount amount={props.amount}/>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteButton}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;