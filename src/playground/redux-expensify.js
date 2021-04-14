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
// - SET_TEXT_FILTER
// - SORT_BY_DATE
// - SORT_BY_AMOUNT
// - SORT_STATE_DATE
// - SORT_END_DATE

//! EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
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
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Red Bull', amount: 300 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

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
