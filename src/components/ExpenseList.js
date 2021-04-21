import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// if we want to test the component as an unconnected version we have to export this as a named export
//! so we have 2 versions of this component
//! - v this named export for our test cases v
export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      //
      props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

//! - v and this connected version for the app v
export default connect(mapStateToProps)(ExpenseList)
