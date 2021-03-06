import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

import './styles/styles.scss'

const store = configureStore()

// console.log(store.getState())

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 2100 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))
console.log(store.getState())

// store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
