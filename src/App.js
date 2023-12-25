

import ExpenseItem from "./components/Expenseitem";


function App() {

  const expenses = [
    {
      title: 'Car parking',
      amount: 'Rs: 100',
      date: new Date(2023, 12, 24)
    },
    {
      title: 'Movie',
      amount: 'Rs: 500',
      date: new Date(2023, 12, 25)
    },
    {
      title: 'Petrol',
      amount: 'Rs: 200',
      date: new Date(2023, 12, 22)
    },
    {
      title: 'Friends',
      amount: 'Rs: 1000',
      date: new Date(2023, 12, 20)
    }
  ]

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} date={expenses[0].date}></ExpenseItem>
  //     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location} date={expenses[1].date}></ExpenseItem>
  //     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location} date={expenses[2].date}></ExpenseItem>
  //     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} location={expenses[3].location} date={expenses[3].date}></ExpenseItem>
  //   </div>
  // );

  const expenseItems = [];

  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(
      <ExpenseItem
        key={i} 
        title={expenses[i].title}
        amount={expenses[i].amount}
        location={expenses[i].location}
        date={expenses[i].date}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
