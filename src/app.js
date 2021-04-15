import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

console.log(store.getState())

store.dispatch(addExpense({ description: 'Water Bill', amount: 820, createdAt: 100 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 1820, createdAt: 1100 }))
store.dispatch(addExpense({ description: 'Potatoes', amount: 2820, createdAt: 2100 }))
console.log(store.getState())

store.dispatch(setTextFilter('water'))

setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
