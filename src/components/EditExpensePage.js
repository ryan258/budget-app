// With the edit page we want to make defaults the current expense's props

import React from 'react'
//! 2a.) Now connect this component to the redux store
import { connect } from 'react-redux'
//! 6.) Bring in the expense form!
import ExpenseForm from './ExpenseForm'
//! 9.) Dispatch the action to edit the expense
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  // console.log(props)
  return (
    <div>
      <h2>EditExpensePage component!</h2>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }))
          props.history.push('/')
        }}
      >
        Remove
      </button>
      <p>Edit Expense with the id of {props.match.params.id}</p>
      {/* 6a.) Add ExpenseForm */}
      <ExpenseForm
        //! 7) Pass down the current expense object through props so it can flow down to and be used in the ExpenseForm component
        expense={props.expense}
        //! 6c.) Add SubmitHandler and add in expense object
        onSubmit={(expense) => {
          // console.log('updated', expense)
          //! 9.) Dispatch the action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense))
          //! 10.) Redirect to dashboard
          props.history.push('/')
        }}
      />
    </div>
  )
}

//! 3.) Now we want to map state to props to fill in current/initial values of the edit form
// - ie give this page the current expense object
// - arg0 = state
// - arg1 = props (current props passed into the HOC and use them to calculate the props we want to add on)
//!!! 2 The HOC passes the props through
const mapStateToProps = (state, props) => {
  //!!! 3 And allows us to add on some new ones
  return {
    //! 4.) Add a new prop called expense, and we'll use the current props to search the expenses array
    // - find() - allows us to search through an array for a single item where something returns true
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    //! 4a.) - this will give our component up above access to the expense
  }
}

//! 2b.) Now connect this component to the redux store
// export default EditExpensePage
//! 5.) Pass mapStateToProps obejct down
export default connect(mapStateToProps)(EditExpensePage)
//! ^^^ NOW WE CAN BRING IN OUR ExpenseForm! ^^^

//!!! 1 React router renders our HOC
