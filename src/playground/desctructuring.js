//Objett destructuring

// const person = {
//     // name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Calgary',
//         temp: 55
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Unknown' } = book.publisher

console.log(publisherName)

//
//Array desctructuring
//

const address = ['1299 Dinasour Street', 'Calgary', 'AB', 'T3M1YS']

const [, city, , , year = '1900'] = address;

console.log(`You live in ${city} in ${year}`)

const item = ['Coffee', '$2.00', '$2.30', '$3.00']

const [itemName, ,,,price = '$4.00'] = item

console.log(`${itemName}  costs ${price}`)