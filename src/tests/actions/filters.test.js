import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters'
// for date we want to have data we're using in the real world, moment instance objects
// so we need to import moment
import moment from 'moment'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set text filter object w/ text value', () => {
  const text = 'bill'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate set text filter object w/ default', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
  // const action = sortByDate()
  // expect(action).toEqual({
  //   type: 'SORT_BY_DATE'
  // })
})

test('should generate aaction object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
  // const action = sortByAmount()
  // expect(action).toEqual({
  //   type: 'SORT_BY_AMOUNT'
  // })
})
