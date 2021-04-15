//! to store/configureStore.js
// import { createStore, combineReducers } from 'redux'

//! to actions/expenses.js
// import uuid from 'uuid'
// - addExpense
// - removeExpense
// - editExpense

//! to actions/filters.js
// - setTextFilter
// - sortByDate
// - sortByAmount
// - setStartDate
// - setEndDate

//! EXPENSES REDUCER
//! to reducers/expenses.js
// - this will be imported into store/configStore.js

//! FILTERS REDUCER
//! to reducers/filters.js

// timestamps (count in milliseconds) - count from midnight Jan 1st, 1970 (unix epoch)
// +- integer = timestamp value (2240, 10, -404)
//

//! GET VISIBLE EXPENSES
//! to selectors/expenses.js

//! STORE CREATION
//! to store/configureStore.js

store.subscribe(() => {
  const state = store.getState() // get entire state array and all the filters
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log(store.getState())
  console.log(visibleExpenses)
})
console.log('add expenses')
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -22100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }))

// console.log('remove expense')
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// console.log('edit expense')
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// console.log('filter')
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter(''))
console.log('sort')
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// console.log('set start date')
// store.dispatch(setStartDate(2125))
// store.dispatch(setStartDate())
// console.log('set end date')
// store.dispatch(setEndDate(-2500))
// store.dispatch(setEndDate())

//! All the data we'll want to track to create the app
const demoState = {
  expenses: [
    {
      id: 'giasgadisaj',
      description: 'January Rent',
      note: 'This is a note about this particular expense, which can be long winded and such. This was the final payment for that address.',
      amount: 62500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

// Object Spread operator - like array spread but some differences
// - allows us to grab from existing objects
// - spread copies contents of an object and places them into a new object
// - it's useful because we don't want to mutate objects either
/*
const user = {
  name: 'Manny',
  age: 21
}

console.log({
  ...user,
  location: 'Key West',
  age: 42
})
*/
// log: {name: "Manny", age: 42, location: "Key West"}
