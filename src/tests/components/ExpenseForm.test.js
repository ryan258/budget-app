import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
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

test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

// working with spies - to create fake functions created by jest for us, and we can make assertions about them, like:
// @ https://jestjs.io/docs/expect
// @ https://jestjs.io/docs/expect#tohavebeencalled
// - .toHaveBeenCalled() will throw an error if the spy was never called and pass if it was called
// @ https://jestjs.io/docs/expect#tohavebeencalledtimes
// -- function was called and called w/ the right stuff
// @ https://jestjs.io/docs/expect#tohavebeencalledwith
// @ https://jestjs.io/docs/expect#tohavebeenlastcalledwith
// -- not just called but called with the right stuff
// - check if the fake function was called
// - how many times it was called
// - if called w/ specific args
// SO
// 1) CREATE FAKE FUNCTIONS
// 2) PASS THEM INTO COMPONENTS
// 3) MAKE SURE THEY WERE CALLED AS EXPECTED

/* BASIC EXAMPLE 
test('should call onSubmit prop for valid form submission', () => {
  //! 1 - Create a new spy
  const onSubmitSpy = jest.fn()
  // - now we have access to a brand new set of assertions we can make
  // call spy?
  onSubmitSpy('Manny', 'The Keys')
  //! 2 - Check that our spy was called
  expect(onSubmitSpy).toHaveBeenCalledWith('Manny', 'The Keys')
})
*/
// so we're making sure that the error gets cleared and the right stuff gets called
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  //! 2 - Render the expense form, w/
  //      - props (so we have real valid data)
  //      - our event handler w/ the spy
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  //! 3 - now we can simulate the form submission
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  // - so now the form has been submitted and we can make assertions about what should have happened
  expect(wrapper.state('error')).toBe('')
  //! 4 - make sure it was called AND with the correct stuff
  // - since it's a submission there's a id discreprancy, so we have to manually pass our desired object
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  // find that single date picker
  // - we can actually find by component
  // - find one of its props and call it
  //   @ https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/prop.html
  // - then call what comes back, the actual handler
  //   - and pass in a new moment instance
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  // now we can make an assertion that the state was correctly set
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  // make a change and pass it the object that it is expecting
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
  // now make sure the state was changed correctly
  expect(wrapper.state('calendarFocused')).toEqual(focused)
})
