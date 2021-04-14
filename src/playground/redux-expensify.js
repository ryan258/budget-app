import { createStore, combineReducers } from 'redux'

// Different Reducers we'll need to make
// - ADD_EXPENSE
// - REMOVE_EXPENSE
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
  switch (action) {
    default:
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
console.log(store.getState()) // {expenses: Array[0], filters: {...}}

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
