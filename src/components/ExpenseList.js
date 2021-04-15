//!!!!! WHEN YOU CONNECT A COMPONENT TO THE REACT STORE IT BECOMES REACTIVE
// - as the store changes, the component will get rerendered with the new values
// - we just have to decided how to render things
// --- our goal is to get as many of our components into the presentation component pattern as possible! (ExpenseList)

import React from 'react'
import { connect } from 'react-redux'
//! 2) Import that stateless function for list items
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* {props.expenses.length} */}
    {/* 3) Render all the expense data as list items, and passing down all the props w/ spread - we are taking an array of items and converting it into a list of instances!*/}
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
)

const mapStateToProps = (state) => {
  return {
    // expenses: state.expenses,
    // filters: state.filters
    // vv see the filtered array
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
