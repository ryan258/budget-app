import React from 'react'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <h2>EditExpensePage component!</h2>
      <p>Edit Expense with the id of {props.match.params.id}</p>
    </div>
  )
}

export default EditExpensePage
