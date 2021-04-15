import React from 'react'
import ReactDOM from 'react-dom'
//! 1) Get Provider from react-redux module
// - Provider allows us to provide the store to all the components in our app, now we no longer have to worry about passing the store around, components that want to access the store can just access the store straight away
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

// get access to all the store methods like dispatch/subscribe/getState
const store = configureStore()

console.log(store.getState())

store.dispatch(addExpense({ description: 'Water Bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(addExpense({ description: 'Potatoes' }))
console.log(store.getState())

store.dispatch(setTextFilter('potatoes'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// ReactDOM.render(<AppRouter />, document.getElementById('app'))
//! 2) Wrap the Provider around our app
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
