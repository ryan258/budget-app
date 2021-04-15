// where we pull everything together

import { createStore, combineReducers } from 'redux'
// we'll have to grab those reducsers we're combining
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  //! STORE CREATION
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )

  return store
}
