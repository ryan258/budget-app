import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

// make sure the default state gets set to an empty array
test('should set default state', () => {
  // dispatch the @@INIT action
  // undefined - because we're not passing any data
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

// now we run tests that need data to work with
// data via a fixtures/expenses

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    // we'll grab the rent expense
    id: expenses[1].id
  }
  // now we can dispatch it - call expenses reducer
  // state will be the return value
  const state = expensesReducer(expenses, action)
  // the Rent item should be removed (the middle one)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    // an id that doesn't exist in the data
    id: '-1'
  }
  // now we can dispatch it - call expenses reducer
  // state will be the return value
  const state = expensesReducer(expenses, action)
  // we should get the same array back bc remove id wasn't found
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  // we need to create some data to test this
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 30000
  }
  // this is the action we're trying to dispatch
  const action = {
    type: 'ADD_EXPENSE',
    // attach the expense data
    expense
  }
  // pass this all into the reducer
  // - arg0 - the fixture expenses data array
  // - arg1 - pass in the action object
  const state = expensesReducer(expenses, action)
  // assert that the array that comes back matches our expectation that the new expenses has been added, 3 old ones followed by the new one
  expect(state).toEqual([...expenses, expense])
})

// we'll change the amount in the second expense item
test('should edit an expense', () => {
  // define the edits in the action obj
  const amount = 150000
  const action = {
    type: 'EDIT_EXPENSE',
    // set up the other values we need for the action
    id: expenses[1].id,
    // then our updates obj that will override the existing properties
    updates: {
      amount
    }
  }
  // dispatch the action object
  const state = expensesReducer(expenses, action)
  // assert what comes back - that the 2nd item has a different amount value
  expect(state[1].amount).toBe(amount)
})

test('should not edit expense if expense not found', () => {
  const amount = 150000
  const action = {
    type: 'EDIT_EXPENSE',
    // make a non existant id
    id: '-1',
    updates: {
      amount
    }
  }
  // dispatch the action object
  const state = expensesReducer(expenses, action)
  // assert what comes back - no changes
  expect(state).toEqual(expenses)
})
