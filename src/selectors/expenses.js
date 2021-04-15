//! GET VISIBLE EXPENSES
//! to selectors/expenses.js

// const getVisibleExpenses = (expenses, filters) => {
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      // are there matches?
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}
