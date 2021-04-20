import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
//! 1) Make mock test data
//! 1a) Move it to fixtures/expenses.js so we can import it into more test files
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
  //! 2) define state of filters
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  // - expenses arg - our list of expenses data
  // - filters - the filters we have set for this test state
  const result = selectExpenses(expenses, filters)
  // this time we're expecting an array
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
  //! 2) define state of filters
  const filters = {
    text: '',
    sortBy: 'date',
    //! Bring in moment instances to compare for filters
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
  //! 2) define state of filters
  const filters = {
    text: '',
    sortBy: 'date',
    //! Bring in moment instances to compare for filters
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
  //! 2) define state of filters
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  // - expenses arg - our list of expenses data
  // - filters - the filters we have set for this test state
  const result = selectExpenses(expenses, filters)
  // this time we're expecting an array
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
