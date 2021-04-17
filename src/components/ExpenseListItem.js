import React from 'react'
//! 0.) Import Link so we can go to the expenses edit page
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    {/* 1.) Use the Link to send us to this item's edit page */}
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
    {/* Move button to edit page */}
    {/* <button
      onClick={() => {
        dispatch(removeExpense({ id }))
      }}
    >
      Remove
    </button> */}
  </div>
)

// export default ExpenseListItem
// you don't have to take anything from the state
// export default connect()(ExpenseListItem)
//! now that we're moving the remove button to the editExpensePage we no longer need connect
export default ExpenseListItem
