/*const add = (a, b) => a + b
const generateGreeting = (name = 'Anon') => `Hello, ${name}!`

// jest provides us with a suite of global variables that allow us to contruct our test cases
// - one thing Jest gives us access to is an ASSERTION library

// test lets us set up a new test case
// - arg0 -string- test name
// - arg1 -function- code to run for the test case
test('should add two numbers', () => {
  const result = add(3, 4)

  //! here we're making an ASSERTION - the hard way
  // test cases pass because you didn't throw any errors from the function
  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3 but the result was ${result}. Expected 7`)
  // }

  //! here we're using jest's helper for ASSERTIONs - expect() & .toBe()
  expect(result).toBe(7)
})

test('should say "Hello, Moto!"', () => {
  const result = generateGreeting('Moto')
  expect(result).toBe('Hello, Moto!')
})

test('should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello, Anon!')
})
*/
