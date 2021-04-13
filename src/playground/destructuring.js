// Destructuring means we can rip the data apart and put things in their own variables.

//! /////////////////// !//
//! ARRAY DESTRUCTURING !//
//! /////////////////// !//

const address = ['123 Fake Street', 'Moralton', 'Arkansas', '72710']

//! Option #1
console.log(`You are in ${address[1]}, ${address[2]}`)
// You are in Moralton, Arkansas

//! Option #2
// const city = address[1]
// const state = address[2]
// console.log(`You are in ${city}, ${state}`)
// You are in Moralton, Arkansas

//! Option #3 - DESTRUCTURE
// - it matches array items up by position
// const [street, city, state, zip] = address
// - you can also just have an empty name and it will skip that item
const [, city, state] = address
console.log(`You are in ${city}, ${state}`)
// You are in Moralton, Arkansas

//! Option #4 - DESTRUCTURE - w/ DEFAULTS
const address2 = ['123 Fake Street', 'Moralton']
const [, city2, state2 = 'AR'] = address2
console.log(`You are in ${city2}, ${state2}`)
// You are in Moralton, AR

//!!!!!!! CHALLENGE !!!!!!! - Grab 1st and 3rd items using array destructuring
const item = ['Coffee (iced)', '$3', '$5', '$7.50']
const [itemName, , mdPrice] = item

console.log(`A medium ${itemName} costs ${mdPrice}`)
// A medium Coffee (iced) costs $5

//! //////////////////// !//
//! OBJECT DESTRUCTURING !//
//! //////////////////// !//

/*const person = {
  name: 'Manny',
  age: 15,
  location: {
    city: 'Key West',
    temp: 92
  }
}

//! Option #1
// console.log(`${person.name} is ${person.age}`)
// Manny is 15

//! Option #2
// const name = person.name
// const age = person.age

// console.log(`${name} is ${age}`)
// Manny is 15

//! Option #3 - First Level DESTUCTURING
// const { name, age } = person
// it looks for properties named 'name' and 'age' and makes them into their own variables

// console.log(`${name} is ${age}`)
// Manny is 15

//! Option #4 - ADD DEFAULT / FALLBACK
const { name, age, petName = 'Orson' } = person

console.log(`${name} is ${age} and has a pet named ${petName}`)
// Manny is 15 and has a pet named Orson

//! Getting that location data destructured - destructuring from a nested object
//! Option #1
if (person.location.city && person.location.temp) {
  console.log(`It's ${person.location.temp} in ${person.location.city}`)
  // It's 92 in Key West
}

//! Option #2 - Straight Object Destructuring
const { city, temp } = person.location

if (city && temp) {
  console.log(`It's ${temp} in ${city}`)
  // It's 92 in Key West
}

//! Option #3 - RENAMING the variables
const { city: ciudad, temp: temperature } = person.location

if (ciudad && temperature) {
  console.log(`It's ${temperature} in ${ciudad}`)
  // It's 92 in Key West
}

//! USING DESTRUCTURING + RENAMING + DEFAULTS
const { pet: groovyPetName = 'Ike' } = person
console.log(groovyPetName)

//!!!!!!! CHALLENGE !!!!!!!
const book = {
  title: 'Needful Things',
  author: 'Stephen King',
  publisher: {
    name: 'Viking Press'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)
*/
