//! 3) Create this stateless functional component
import React from 'react'
//! 5) Import the connect - to connect this component to the redux store, to dispatch or read from the store
import { connect } from 'react-redux'

//! 8) pass what you requested from state through props to use in the component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* 9) then use what you got from props here */}
    {/* 12) use the state object that is being passed down from the HOC */}
    {props.expenses.length}
  </div>
)

//! 6) Create a new HOC and connect it with target component
// - if wired up add Connected to the name convention
const ConnectedExpenseList = connect(
  //! 7) define what info from the store we want this component to be able to access
  (state) => {
    return {
      //! 11) Read off state
      expenses: state.expenses
    }
  }
)(ExpenseList)

//! 10) Use our connected component as our default export
// export default ExpenseList
export default ConnectedExpenseList
