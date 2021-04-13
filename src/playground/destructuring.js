// Destructuring means we can rip the data apart and put things in their own variables.

const person = {
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
