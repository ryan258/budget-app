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

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  // now we're going to focus on actually submitting to the form
  // - find the form
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  // - simulate an event (submit)
  // .simulate(event[, mock]) => Self
  // https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
  // the e.preventDefault() will cause this to error, so we have to fake this by defining things in simulate as an object in the second arg w/ an empty function
  // - now we can test for the error message to appear in state
  // we'll do this by fetching the state off of wrapper
  // .state([key]) => Any
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/state.html
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New Description'
  //! 1) render expense form
  const wrapper = shallow(<ExpenseForm />)
  //! 2) change the input (submit the change event)
  // - access the element w/ find, .at(index if the input you want)
  //   - if there's just one you don't need .at()
  //   https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/at.html

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  //! 3) assert that the description state was set
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note value'
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

// 12.122
test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})
