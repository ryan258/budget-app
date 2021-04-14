import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Different Reducers we'll need to make
// - ADD_EXPENSE
// 4) Create ACTION GENERATOR w/ defaults
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    // we'll use a node library to create unique IDs - uuid for now
    id: uuid(),
    // 5) Attach the obj argument
    description,
    note,
    amount,
    createdAt
  }
})
// - REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// - EDIT_EXPENSE
// - SET_TEXT_FILTER
// - SORT_BY_DATE
// - SORT_BY_AMOUNT
// - SORT_STATE_DATE
// - SORT_END_DATE

// This would make for an unreasonably long and complicated file so we'll break out the different sections by using a single reducer for each root property in our redux store
// - one that handles just the expenses array, as if filters didn't exist
// - one that handles just the filters, as if expenses didn't exist

// THEN we'll use combineReducers to combine them to create the complete store

//! EXPENSES REDUCER
// 1) Define defaults
const expensesReducerDefaultState = []
// 2) Create reducer w/ defaults
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    // 8) We'll add a case to catch the dispatch
    case 'ADD_EXPENSE':
      // 9) Run some code that adds the new expense to the array
      // dont use push! use concat to not mutate state
      // return state.concat(action.expense)
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      // console.log('default ran')
      return state
  }
}

//! FILTERS REDUCER
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action) {
    default:
      return state
  }
}

//! STORE CREATION
// - we use combineReducers in our first argument as we create our store
const store = createStore(
  combineReducers({
    // 3) Add reducer to the combineReducers() object
    // [property being managed]: [property being managed BY]
    expenses: expensesReducer,
    filters: filtersReducer
  })
)
// 6) Add an expense w/ store.subscribe to track changes
store.subscribe(() => {
  console.log(store.getState())
})
// console.log(store.getState()) // {expenses: Array[0], filters: {...}}

// 7) Dispatch an addExpense w/ an object arg
// -- this dispatch will go out to both reducers
// -- the dispatch will also return the action obj
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Red Bull', amount: 300 }))

// console.log(expenseOne) // {type: "ADD_EXPENSE", expense: {..obj defined above..}} - we get the action obj back

// set id to the id we want to remove
store.dispatch(removeExpense({ id: expenseOne.expense.id }))

//! All the data we'll want to track to create the app
const demoState = {
  expenses: [
    {
      id: 'giasgadisaj',
      description: 'January Rent',
      note: 'This is a note about this particular expense, which can be long winded and such. This was the final payment for that address.',
      // sticking with cents reduces any sort of computational/rounding errors
      amount: 62500,
      createdAt: 0
    }
  ],
  // we can also filter things
  filters: {
    // we could filter, looking into just description and note for mentions of the text
    text: 'rent',
    // track how they want to sort things
    sortBy: 'amount', // date or amount
    startDate: undefined, // filter by a date range
    endDate: undefined // this will create expenses between the two picked dates
  }
}
