//!!!!! WHEN YOU CONNECT A COMPONENT TO THE REACT STORE IT BECOMES REACTIVE
// - as the store changes, the component will get rerendered with the new values
// - we just have to decided how to render things
// --- our goal is to get as many of our components into the presentation component pattern as possible! (ExpenseList)

//! 3) Create this stateless functional component
import React from 'react'
//! 5) Import the connect - to connect this component to the redux store, to dispatch or read from the store
import { connect } from 'react-redux'

//! 8) pass what you requested from state through props to use in the component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* 9) then use what you got from props here */}
    {/* 15) include filters */}
    {props.filters.text}
    {/* 12) use the state object that is being passed down from the HOC */}
    {props.expenses.length}
  </div>
)

//! 13) Also a common practice to break out the function into its own variable
//! 16) SO AS THE STORE CHANGES, THIS WILL AUTOMATICALLY RERUN - get fresh values into the component
const mapStateToProps = (state) => {
  return {
    //! 11) Read off state
    expenses: state.expenses,
    //! 14) Add our filters too
    filters: state.filters
  }
}

//! 6) Create a new HOC and connect it with target component
// - if wired up add Connected to the name convention
//! 12) The more common way to export a connected component
// const ConnectedExpenseList = connect(
export default connect(
  //! 7) define what info from the store we want this component to be able to access
  //! 13) Also a common practice to break out the function into its own variable
  mapStateToProps
)(ExpenseList)

//! 10) Use our connected component as our default export
// export default ExpenseList
// export default ConnectedExpenseList
