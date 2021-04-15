//! Expenses Reducer
// - no dependencies, it's a pure function

const expensesReducerDefaultState = []
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
export default (state = expensesReducerDefaultState, action) => {
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

// since there's only 1 thing we'll use a default export
// export default expensesReducer
// might as well just add it above
