import ExpenseTitleAmount from './ExpenseTitleAmount';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

const ExpenseItem = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
        <div className='expense-item-description'>
            <ExpenseTitleAmount title={props.title}/>
        <div className='expense-item-price'>
            <ExpenseTitleAmount amount={props.amount}/>
        </div>
        </div>
        </Card>
    )
}

export default ExpenseItem;