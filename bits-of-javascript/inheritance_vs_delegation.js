'use strict'

let log = console.log;
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

//////////////////////////////////////////////
// Classical "prototypal" object-oriented style
delimiter('"Prototypal object-oriented" style')
{
    function Animal(name) {
        this.name = name
    }

    Animal.prototype.identify = function() {
        log(`Animal's name is: ${this.name}.`)
    }

    function Dog(name) {
        Animal.call(this, name)
    }

    Dog.prototype = Object.create(Animal.prototype)

    Dog.prototype.sayHello = function() {
        log(`${this.name} says woof.`)
    }

    const dog_A = new Dog('Spot')
    const dog_B = new Dog('Bear')
    dog_A.identify()
    dog_B.identify()

    dog_A.sayHello()
    dog_B.sayHello()

    log(`dog_A == dog_B [${dog_A == dog_B}]`)      
    log(`dog_A.__proto__ == dog_B.__proto__ [${dog_A.__proto__ == dog_B.__proto__}]`)  
}


//////////////////////////////////////////////
// ES6 "class-style" based implementation
delimiter('ES6 "class-style" based implementation')
class Animal {
    constructor(name) {
        this.name = name
    }
  
    identify() {
        log(`Animal's name is: ${this.name}`)
    }
}

class Dog extends Animal {
    sayHello() {
        log(`${this.name} says woof.`)
    }
}

const dog_A = new Dog('Rex')
const dog_B = new Dog('Black')

dog_A.identify()
dog_B.identify()

dog_A.sayHello()
dog_B.sayHello()

log(`dog_A == dog_B [${dog_A == dog_B}]`)      
log(`dog_A.__proto__ == dog_B.__proto__ [${dog_A.__proto__ == dog_B.__proto__}]`)

//////////////////////////////////////////////
// "Delegation-style" based implementation
delimiter('"Delegation-style" based implementation')
{
    const Animal = {
        init: function(name) {
            this.name = name
        },

        identify: function() {
            log(`Animal's name is: ${this.name}.`)
        }
    }

    const Dog = Object.create(Animal)
    Dog.sayHello = function() {
        log(`${this.name} says woof.`)
    }

    const dog_C = Object.create(Dog)
    const dog_D = Object.create(Dog)
    dog_C.init('White')
    dog_D.init('Hund')

    dog_C.identify()
    dog_D.identify()

    dog_C.sayHello()
    dog_D.sayHello()

    // log(dog_C.__proto__, Dog)
    // log(Dog.__proto__, Animal)
    log(`dog_A == dog_B [${dog_A == dog_B}]`)      
    log(`dog_A.__proto__ == dog_B.__proto__ [${dog_A.__proto__ == dog_B.__proto__}]`)
}