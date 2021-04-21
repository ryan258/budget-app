import React from 'react'
import { shallow } from 'enzyme'
// there's no connection to redux, so we can just get it
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

//! so unless we mockout data coming from the moment library, we'll always fail the test because the moment's now will always change
// - see Manual Mocks page for Jest @ https://jestjs.io/docs/manual-mocks
//! but as test writers we can write mocks for various libraries

//! Step 1: Create the mock

// start by creating a simple test case
test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly with expense data', () => {
  const expense = expenses[1]
  const wrapper = shallow(<ExpenseForm expense={expense} />)
  expect(wrapper).toMatchSnapshot()
})
