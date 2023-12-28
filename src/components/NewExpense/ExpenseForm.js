const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>
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