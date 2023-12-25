import ExpenseTitleAmount from './ExpenseTitleAmount';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
        <div className='expense-item-description'>
            <ExpenseTitleAmount title={props.title}/>
        <div className='expense-item-price'>
            <ExpenseTitleAmount amount={props.amount}/>
        </div>
        </div>
        </div>
    )
}

export default ExpenseItem;