/**
 * Demonstration:
 * 1. object reference copy
 * 2. object shallow copy
 * 3. object deep copy
 * 
 * run the file in node:
 * node object_experiments.js
 */
const object_1 = {
    firstName: 'Alice',
    lastName: 'the Rabbit Hunter'
}
console.log('Value of object 1: ', object_1)
console.log('\n')

/**
 * Object Reference Copy
 */
// copy the object reference from object_1 to object_2.
// both object_1 and object_2 refer to the same object.
const object_2 = object_1
object_2.lastName = 'the nice girl'
console.log('Value of object 1: ', object_1)
console.log('Value of object 2: ', object_2)
console.log('object 1 === object2? ', object_1 === object_2)
console.log('\n')

/**
 * Object Shallow Copy
 */
// object_3 refers to a new object where object_1 is copied into.
const object_3 = Object.assign({}, object_1)
object_3.lastName = 'a good guy'
console.log('Value of object 1: ', object_1)
console.log('Value of object 3: ', object_3)
console.log('object_1 !== object_3? ', object_1 !== object_3)
console.log('\n')

const hunter = {
    firstName: 'Alice',
    lastName: 'the Rabbit Hunter'
}
console.log('Value of object hunter: ', hunter)
console.log('\n')

/**
 * Object Shallow Copy
 */
// create a shallow copy with spread operator
const girl = {
    ...hunter
}
girl.lastName = 'the nice girl'
console.log('Value of object hunter: ', hunter)
console.log('Value of object girl: ', girl)
console.log('\n')

/**
 * Object Shallow Copy
 */
// create an object that has a nested object
const cast = {
    hunter, // this key refers to a nested object 
    prey: 'The Rabbit'
}
console.log('Value of object hunter: ', hunter)
console.log('Value of object cast: ', cast)
console.log('\n')

// mutate the hunter 
hunter.firstName = 'Bob'
console.log('Value of object hunter: ', hunter)
console.log('Value of object cast: ', cast)
console.log('hunter === cast.hunter? ', hunter === cast.hunter)
console.log('\n')

/**
 * Object Deep Copy
 */
// make a deep copy from cast to new_cast
// all nested objects in cast are copied.
const new_cast = JSON.parse(JSON.stringify(cast))
new_cast.hunter.firstName = 'Vixi'
console.log('object hunter: ', hunter)
console.log('object cast: ', cast)
console.log('object new_cast: ', new_cast)
console.log('cast.hunter !== new_cast.hunter? ', cast.hunter !== new_cast.hunter)