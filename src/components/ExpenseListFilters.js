import React from 'react'
//! 1) we have to connect this to the store, so import connect
import { connect } from 'react-redux'
//! 8) import the filter action we want to call
import { setTextFilter } from '../actions/filters'

//! 5) Now this has access to props.filters.text via props
const ExpenseListFilters = (props) => (
  <div>
    {/* we can set the value for our inputs using the value prop */}
    {/* we want to set the value to whatever the current search string is */}
    {/* 6) Provide an onChange handler so we have 2 way data binding */}
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        // we need to change the redux store, and dispatch is the thing that updates the store - then whatever the value is will be the text on the store
        //! 7) Call dispatch to call an action
        //! 9) now we can dispatch the setTextFilter and feed it the value
        props.dispatch(setTextFilter(e.target.value))
        // console.log(e.target.value)
      }}
    />
  </div>
)

//! 3) Get what we want off the store
const mapStateToProps = (state) => {
  return {
    //! 4) get all the filters
    filters: state.filters
  }
}

//! 2) export a connected version of this component
// export default ExpenseListFilters
export default connect(mapStateToProps)(ExpenseListFilters)
