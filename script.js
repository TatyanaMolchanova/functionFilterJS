// 1 filtering dogs

var animals = [
    { name: 'Flyffykins',   species: 'rabbit' },
    { name: 'Caro',         species: 'dog' },
    { name: 'Hamilton',     species: 'dog' },
    { name: 'Harold',       species: 'fish' },
    { name: 'Ursula',       species: 'cat' },
    { name: 'Jimmy',        species: 'fish' },
]


// 5 filtering dogs filter function

var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
// var otherAnimals = animals.reject(isDog) // just in _.reject at lodash/underscore libraries

// console.log(otherAnimals)

// 4 filtering dogs filter function

// var dogs =animals.filter(function(animal) {
//     console.log(animal)
//     console.log(animal.species)
//     return animal.species === 'dog'
// })

// console.log(dogs)

// 3 filtering dogs normal loop

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
//     console.log(animals.length)
//     console.log(animals[i])
//     console.log(animals[i].species)
//     if (animals[i].species === 'dog')
//         dogs.push(animals[i])
// }

// console.log(dogs)


// filter 2 part

// var triple = function (x) {
//     return x *3
// }

// var waffle = triple

// waffle(30)

// console.log(waffle(30))


// filter 1 part

// function triple(x) {
//     return x *3
// }