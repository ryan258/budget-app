// REDUX 101
// - ACTIONS - are just our way of communicating with the store, it's just an object
//   then we get our ACTION to the store through DISPATCH
//   - we then handle the the DISPATCH calls with the function passed to createStore(2nd arg)
// - createStore
//   - gets called once initially for the default state
//   - then 1 time for every store.dispatch({type: "XXXXX"}) call
//     - and then make meaningful changes through to the state

import { createStore } from 'redux'
// this store will be the thing that tracks our data over time

// create a store and give it a function with a default state
// - this function gets called ONCE, right away,
//   - since there is no state the first time it's called, the default is used
//   - it gets returned and becomes the new state ie. { count: 0 }
// - now the object getting dispatched to this createStore is the 2nd arg, action
//   - so we can now combine the current action with the state to figure the new state
const store = createStore((state = { count: 0 }, action) => {
  // we check the object type to choose what course of action to take
  //! the common pattern is to use a switch statement here - easier to scale and read
  switch (action.type) {
    case 'INCREMENT':
      // return the new state - we're not changing the state or action, we're just computing a new state
      //! vv here we're rocking our dynamic action vv
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return { count: state.count + incrementBy }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return { count: state.count - decrementBy }
    case 'RESET':
      return { count: 0 }
    case 'SET':
      // here's a required action field in action
      return { count: action.count }
    default:
      // console.log('running')
      return state
  }
})

//! .subscribe(fn) gets called every time the store changes
// - it's a great way to do something when the state changes
// we can also unsubcribe by putting this in a variable
// - then call it when we're done i.e. unsubscribe()
const unsubscribe = store.subscribe(() => {
  // prints the state every time it changes
  console.log(store.getState())
})

// return the current state object w/ .getState()
// console.log(store.getState())

//! We can change the data in the store with ACTIONS
// - an action is just an object that gets sent to the store
//   - this object describes the kind of action we'd like to take, actions that change the state over time
//     ie. for a Person: walk, stop_walking, sit, work, stop_working

// so we'll want: increment, decrement, reset - then we can DISPATCH these different actions
// - 1 - we have to define the object type, which is the name we refer to it as
//! We send this object to the store with DISPATCH (store.dispatch({})) - then the store can do something with this information
// - when we dispatch to the store is runs the store function again - using the object to make changes to the state
store.dispatch({
  type: 'INCREMENT',
  // we can also add more values to the action object and have DYNAMIC ACTIONS
  incrementBy: 5
})

// we're calling the unsubscribe variable we put the subscribe call into
// - so just call the variable we put that subscribe() call into and viola, it magically unsubscribes
// unsubscribe()

store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'RESET'
})
store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

// we'll require a value for a dynamic action - like it's not optional
store.dispatch({
  type: 'SET',
  count: 101
})

// console.log(store.getState())
