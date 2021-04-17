import React from 'react'
//! 9) Now we need to dispatch the proper action to the redux store
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
//! 12) We need to import the action generator so we can dispatch the action
// - which takes the properties (desc, note, amount, createdAt)
import { addExpense } from '../actions/expenses'

//! 11) Add props so we can now dispatch
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      //! 6) Use submit handler for this version of the form, the one that dispatches the addExpense action.
      onSubmit={(expense) => {
        //! 7) onSubmit we get all that data back w/ all the props we expect (desc, amount, createdAt, note)
        // console.log(expense)
        //! 13) We can finally dispatch the proper action for this ExpenseForm
        props.dispatch(addExpense(expense))
        //! 14) Now we'll redirect the user to the home page via router's prop.history.action.PUSH to programmatically change pages
        props.history.push('/')
      }}
    />
  </div>
)

//! 10) Wire up this page component to the store so we can dispatch
// - we don't need anything from the state so ()
// - so now we have access to props.dispatch
export default connect()(AddExpensePage)
