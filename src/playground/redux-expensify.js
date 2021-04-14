import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// - EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// - SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// - SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// - SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// - SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// - SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

//! EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            // get the existing properties
            ...expense,
            // override just the updates they passed in
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

//! FILTERS REDUCER
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

//! STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})
console.log('add expenses')
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
console.log('remove expense')
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
console.log('edit expense')
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
console.log('filter')
store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter(''))
console.log('sort')
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
console.log('set start date')
store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
console.log('set end date')
store.dispatch(setEndDate(2500))
store.dispatch(setEndDate())

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
