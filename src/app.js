import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
//! 1.) Grab the things we know we'll need
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

// get access to all the store methods like dispatch/subscribe/getState
const store = configureStore()

console.log(store.getState())

//! 2. Add expenses
store.dispatch(addExpense({ description: 'Water Bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(addExpense({ description: 'Potatoes' }))
console.log(store.getState())

//! 3. Add filter
store.dispatch(setTextFilter('potatoes'))

//! 4.
//! - can be put in a subscribe call to make it reactive
// store.subscribe(() => {
// get state and all the filters
const state = store.getState()
// get the visible expenses / filtered results
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
// })

ReactDOM.render(<AppRouter />, document.getElementById('app'))
