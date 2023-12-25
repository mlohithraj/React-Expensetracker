

import ExpenseItem from "./components/Expenseitem";


function App() {

  const expenses = [
    {
      title: 'Car parking',
      amount: 'Rs: 100',
      location: 'Theatre',
      date: new Date(2023, 12, 24)
    },
    {
      title: 'Movie',
      amount: 'Rs: 500',
      location: 'Salar',
      date: new Date(2023, 12, 24)
    },
    {
      title: 'Petrol',
      amount: 'Rs: 200',
      location: 'For Movie',
      date: new Date(2023, 12, 24)
    },
    {
      title: 'Friends',
      amount: 'Rs: 1000',
      location: 'Picnic',
      date: new Date(2023, 12, 25)
    }
  ]

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
