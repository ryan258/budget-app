// this allows us to configure Enzyme tests for the environment we're running in

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

// now whenever we use Enzyme in our test cases they'll be for react 16

// documentation: https://enzymejs.github.io/enzyme/
