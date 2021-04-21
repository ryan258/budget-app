// we want to test the unconnected version, independent of the redux store
// - bc we want to provide a set of dynamic props

import React from 'react'
import { shallow } from 'enzyme'
//! importing the named export that isn't connected
import { ExpenseList } from '../../components/ExpenseList'
// bring in our test fixtures, array of test expense items
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  // we want to render the component w/ that data
  const wrapper = shallow(
    // pass test data into our disconnected component
    <ExpenseList expenses={expenses} />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})
