//! 1) Create the stateless component that renders out the structure for each expense item
import React from 'react'

// const ExpenseListItem = (props) => (
//   <div>
//     <h3>{props.description}</h3>
//     <p>{props.amount}</p>
//     <p>{props.createdAt}</p>
//   </div>
// )
const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
)

export default ExpenseListItem
