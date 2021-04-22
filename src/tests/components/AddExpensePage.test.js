import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

//!!! TO REDUCE DUPLICATE CODE AND WRITE MORE ASSERTIONS USE JEST'S GLOBAL METHODS
// @ https://jestjs.io/docs/api#beforeeachfn-timeout
// - afterAll(fn, timeout) - runs after all the cases in a test file complete
// - afterEach(fn, timeout) - runs after each test in a test file completes
// - beforeAll(fn, timeout) - runs once before any of the tests run
// - beforeEach(fn, timeout) - runs before each test case runs in a file

//!!! so we'll set up the spies for the component and then each test case can just use those
// - we want to define fresh copies before each test case
let addExpense, history, wrapper

// @ https://jestjs.io/docs/api#beforeeachfn-timeout
beforeEach(() => {
  // these will run before each test case
  addExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})
//! ^^ now we can reuse these in all our test cases! 👻

test('should render AddExpensePage correctly', () => {
  //! 1) We'll set up some spies for the 2 things we'll pass into the component
  //! 1a) vv We'll move these up to beforeEach()
  // const addExpense = jest.fn()
  // const history = { push: jest.fn() }
  // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
  // now we can just take a snapshot of this and call it a day
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  //! 1) We'll set up some spies for the 2 things we'll pass into the component
  //! 1a) vv We'll move these up to beforeEach()
  // const addExpense = jest.fn()
  // const history = { push: jest.fn() }
  // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
  //! 2) Now we'll actually call the onSubmit function with some fixture data
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  //! 3) Make sure things were called with all the right stuff
  // - spy #1 - history
  expect(history.push).toHaveBeenLastCalledWith('/')
  // - spy #2 - onSubmit - lastCalledWith the data we passed through
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})
