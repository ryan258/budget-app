//! REDUX 101

// ACTION GENERATORS - functions that return action objects
// - the goal is to be a simple function that takes input in and returns the new action object
// - makes what we do a lot simpler and what we only have to do once more complex

// Action Generators step 1 - create a function
// const incrementCount = (payload = {}) => ({
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  //                   step 2 - setup things we need on the action object
  // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
  // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
  // incrementBy: incrementBy
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({ type: 'RESET', count: 0 })

//! This function is called a REDUCER
//! 1.) Reducers are pure functions
//     - output is purely determined by the input,
//     -- it doesn't use anything from outside the functions scope,
// example of a not pure function bc it depends on something other than it's input, a global variable - we don't want thtat
// let a = 10
// const add = (b) => a + b
//     -- it doesn't change anything outside the function's scope
// not pure bc it is interacting with the result variable outside of its scope
// let result
// const add = (a, b) => {
//   result = a + b
// }
//! 2.) Never change state or action
// - Just return an object that returns the new state

//----- REDUCERS -----//
// - ACTIONS describe the fact something happened
// - REDUCERS specify how the app's state changes in response
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //                   step 3 - access incrementBy of action
      return { count: state.count + action.incrementBy }
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return { count: state.count - action.decrementBy }
    case 'RESET':
      return { count: 0 }
    case 'SET':
      return { count: action.count }
    default:
      return state
  }
}

import { createStore } from 'redux'
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// The action objects will just get created in 1 place
// - and we'll have a function we can call to generate the action objects

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch({
//   type: 'INCREMENT'
// })
store.dispatch(incrementCount())
// store.dispatch({
//   type: 'RESET'
// })
store.dispatch(resetCount())
// store.dispatch({
//   type: 'DECREMENT'
// })
store.dispatch(decrementCount())
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// })
store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

store.dispatch(setCount({ count: 42 }))

//!!!!!!!!!!!!!!!!!!!!!!!!! OTHER NOTES !!!!!!!!!!!!!!
//! destructuring objects
// const add = (data) => {
//   return data.a + data.b
// }
const add = ({ a, b }, c) => {
  return a + b + c
}

// console.log(add({ a: 1, b: 12 }, 100))
// 113
