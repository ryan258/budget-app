// react-redux module will allow our react components to connect to redux stores

//! HIGHER ORDER COMPONENTS
// - a component (HOC) that renders another component (normal)
// - the goal of an HOC is to reuse code
// - by render hijacking
// - and prop manipulation
// - and abstract state

import React from 'react'
import ReactDOM from 'react-dom'

// the non-HOC component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

// the HOC component
//! Step 1) Create a regular function
// - WrappedComponent is a standard naming convention
//! react-redux will be giving us things like this - we pass our components inside of them
const withAdminWarning = (WrappedComponent) => {
  //! Step 3)
  // now this is where we return a new component, the HOC
  return (props) => (
    // we'll return what we actually want the component to render
    <div>
      {props.isAdmin && <p>This is private info!</p>}
      {/* Spread in the HOC's props - in this case the info="T-minus..." */}
      <WrappedComponent {...props} />
    </div>
  )
}

// this is just a regular function that returns the higher order component
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {/* show info if they're authenticated or show a message when they're not */}
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to view info!</p>}
    </div>
  )
}

//! Step 2)
//! react-redux - the end result will be like this that we'll be using AND THIS NEW COMPONENT WILL HAVE ACCESS TO THE REDUX STORE
// this will give us an alternative version of the component, an HOC
const AdminInfo = withAdminWarning(Info)
// so now we have this AdminInfo component we can use
const AuthInfo = requireAuthentication(Info)

//! Step 4)
// ReactDOM.render(<Info info="T-minus 6 seconds" />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={false} info="T-minus 6 seconds" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="T-minus 6 seconds" />, document.getElementById('app'))
