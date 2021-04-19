import moment from 'moment'
import filtersReducer from '../../reducers/filters'

// make sure the default values get set up correctly when the redux store first kicks off, type: '@@INIT'

test('should setup default filter values', () => {
  //! 1) set up call to the reducer
  // - arg0 - undefined - current state
  // - arg1 - our action object
  const state = filtersReducer(undefined, { type: '@@INIT' })
  //! 2) Test for state to register default filters
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    // we'll set sortBy to amount so we can see it change back
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const text = 'look mom i am filtering text!'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  // call the reducer
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
  const startDate = moment()
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
  const endDate = moment()
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})
