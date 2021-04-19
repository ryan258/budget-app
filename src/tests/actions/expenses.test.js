//! 1) import exports from actions/expenses.js
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
// so the functions are defined above ^^

//! 2) Call test, give it a name, write the
test('should setup remove expense action object', () => {
  //! 3) Call a function
  const action = removeExpense({ id: '1a1a1a' })
  //! 4) Assert what should come back
  // - since we're comparing 2 objects, even {} === {} won't equal
  //   so .toBe() won't work
  // - - that's where .toEqual() comes in which
  //   will go through everything IN the object and make sure they're
  //   the same
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1a1a1a'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('2b2b2b', { note: 'New Note Value' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '2b2b2b',
    updates: {
      note: 'New Note Value'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  //! 5) Add mock expense data
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  //! 6) Pass data into the addExpense generator
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      // - now we have that id: uuid()  that we can't predict so we'll have to work around that
      // - - so we can use expect.any() for that and pass a type it should be
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object w/ default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String) }
  })
})
