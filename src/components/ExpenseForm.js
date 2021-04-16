// This component will contain all the form markup and logic
import React from 'react'

export default class ExpenseForm extends React.Component {
  // we're going to want to use local component state to track changes to all these inputs
  // then only when the user submits the form will we do something with that information
  // - only when they submit the form will we send them off to redux to:
  //   - edit existing expense or create a new one
  state = {
    description: '',
    note: '',
    amount: ''
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    // here we'll use a fancy regular express to pattern match the input
    // regex101.com is a great tool for this
    // vv if this pattern matches, set the state! vv
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  render() {
    return (
      <div>
        <form>
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
