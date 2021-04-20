// we need a way to virtually render our component
// so we apply snapshot testing with the react-test-renderer library
// - which allows us to render our components in regular JS code
// - then we can assert something about what got rendered
// there are 2 mains ways to test components
// - shallow rendering - not worried about user interaction or life cycle events - just concerned with what is getting rendered
// - full dom rendering - renders child components
// SNAPSHOTS - allow us to track changes to data over time and we'll get notified if it ever changes
// - jest has a handy method for this - .toMatchSnapshot()
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

import Header from '../../components/Header'

test('should render Header correctly', () => {
  //! 1) Create a new renderer
  const renderer = new ReactShallowRenderer()
  //! 2) Render the JSX of what we're trying to render
  renderer.render(<Header />)
  //! 3) assert rendered output
  // - first time you run this test case it will always pass bc there is no existing snapshot, so jest will create a new one of the rendered header output
  // - second time we run this case it will compare that one with the first one, then match = pass, no-match = fail
  expect(renderer.getRenderOutput()).toMatchSnapshot()
  console.log(renderer.getRenderOutput())
})
