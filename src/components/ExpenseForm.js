// This component will contain all the form markup and logic
// The goal of this form is to be reused (in addExpensePage & editExpensePage)
// - so we have to dispatch different stuff,
// - so we'll pass the data up from this component in each of those pages to determine what will be done with the data onSubmit
import React from 'react'
//! 0) Imports
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date() // but the Date API is messy...
//! 1) Create a new moment to pass into react-dates to populate its initial day
const now = moment() // current time + a ton of methods
// console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
  // we're going to want to use local component state to track changes to all these inputs
  // then only when the user submits the form will we do something with that information
  // - only when they submit the form will we send them off to redux to:
  //   - edit existing expense or create a new one
  //! 8.) Set state to current values for target expense and use defaults if no expense was passed down, but if there is, start off at those values
  //! BUT TO MAKE THAT WORK WE HAVE TO DEFINE OUR STATE IN THE CONSTRUCTOR FUNCTION!
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      // amount is a number so we have to make it into a string again
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      // for createdAt we can just pass in a moment w/ timestamp
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  /*state = {
    description: '',
    note: '',
    amount: '',
    //! 3) Add state for the date, a new instance of moment to pass down
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  }*/

  //! 4) Customize props and functionality
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    // here we'll use a fancy regular express to pattern match the input
    // regex101.com is a great tool for this
    // vv if this pattern matches, set the state! vv
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  //! 5) Add submit handler
  onSubmit = (e) => {
    e.preventDefault()
    // add validation for description and the amount
    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount.'
      // const error = 'Please provide description and amount.'
      this.setState(() => ({ error: 'Please provide description and amount.' }))
    } else {
      this.setState(() => ({ error: '' }))
      // Clear the error state
      // console.log('submitted')
      //! 8) Wire in the props from the page component's <ExpenseForm onSubmit={...}
      this.props.onSubmit({
        description: this.state.description,
        // reformat amount because it is currently a string
        // then times 100 because we're working in cents
        amount: parseFloat(this.state.amount, 10) * 100,
        // createdAt is currently a moment object, so we have to get the timestamp back w/ valueOf
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input //
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          {/* <input type="number" placeholder="Amount" /> */}
          {/* switch to type of text because we want to control for the decimal point and cents */}
          <input //
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          {/* 2) Place Date Picker component, past from doc as the required props */}
          <SingleDatePicker
            //! 4) Customize props and functionality
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="created_by_component" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false} // by default it's going to figure out today and future days, we want past too, we'll write logic to override what days should be available, many good use cases for this, like vacancy
          />
          <textarea //
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
