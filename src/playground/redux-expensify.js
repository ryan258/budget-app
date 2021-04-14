import { createStore, combineReducers } from 'redux'

//! All the data we'll want to track to create the app
const demoState = {
  expenses: [
    {
      id: 'giasgadisaj',
      description: 'January Rent',
      note: 'This is a note about this particular expense, which can be long winded and such. This was the final payment for that address.',
      // sticking with cents reduces any sort of computational/rounding errors
      amount: 62500,
      createdAt: 0
    }
  ],
  // we can also filter things
  filters: {
    // we could filter, looking into just description and note for mentions of the text
    text: 'rent',
    // track how they want to sort things
    sortBy: 'amount', // date or amount
    startDate: undefined, // filter by a date range
    endDate: undefined // this will create expenses between the two picked dates
  }
}
