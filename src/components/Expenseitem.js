import './Expenseitem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2023, 12, 24);
    const expenseTitle = 'Parking';
    const expenseAmount = 'Rs: 25';
    const expenseLocation = 'Beach';

    return (
        <div className='expense-item'>
        <h2>Expense Item</h2>
        <h2>{props.date.toISOString()}</h2>
        <div className='expense-item-description'>
        <h2>{props.title}</h2>
        <div className='expense-item-price'>
            <h2>{props.amount}</h2>
        </div>
        <div className='expense-item-location'>
            <h2>{props.location}</h2>
        </div>
        {/* <h3>Petro Rs: 100</h3>
        <h3>Movie Rs: 200</h3> */}
        </div>
        </div>
    )
}

export default ExpenseItem;