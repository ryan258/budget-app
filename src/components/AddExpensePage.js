import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

// To avoid inline functions we'll turn this into a class
/*const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        // props.dispatch(addExpense(expense))
        // vv will make it easier to test
        props.onSubmit(expense)
        props.history.push('/')
      }}
    />
  </div>
)*/
// also export this class so we can import it into our tests!
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // goal is to return an object
  // and we define various props, and these props are going to call dispatch
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}
// - arg0 - is mapStateToProps - and we don't have any state, so undefined it is
// - arg1 - is mapDispatchToProps - it's like mapStateToProps but instead of working w/ state it works w/ dispatch
//             @ https://react-redux.js.org/using-react-redux/connect-mapdispatch
export default connect(undefined, mapDispatchToProps)(AddExpensePage)
