/**
 * NOTE: This can be run in any JavaScript shell or using node and alike runtime
 */ 
'use strict'

let log = console.log;
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

let obj_A = {a: 1, b: 2}
let obj_B = {c: 3, d: 4}

let obj_A_prototype = Object.getPrototypeOf(obj_A)
let obj_B_prototype = Object.getPrototypeOf(obj_B)

delimiter(1)
log(obj_A)
log(obj_B)
log(`obj_A == obj_B [${obj_A == obj_B}]`)
log(`obj_A.hasOwnProperty('a') [${obj_A.hasOwnProperty('a')}]`)
log(`obj_A.hasOwnProperty('c') [${obj_A.hasOwnProperty('c')}]`)
log(`obj_B.hasOwnProperty('c') [${obj_B.hasOwnProperty('c')}]`)

log(`obj_A_prototype: ${obj_A_prototype}`)
log(`obj_B_prototype: ${obj_B_prototype}`)
log(`obj_A_prototype == obj_B_prototype [${obj_A_prototype == obj_B_prototype}]`)

delimiter(2)
log('Prototype chain: obj_A ---> Object.prototype ---> null')
log(`obj_A_prototype == Object.prototype [${obj_A_prototype == Object.prototype}]`)
log(`obj_A_prototype.prototype == null [${obj_A_prototype.prototype == null}]`)

delimiter(3)
// All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype
log(`Object.prototype.hasOwnProperty('valueOf') [${Object.prototype.hasOwnProperty('valueOf')}]`)
log(`obj_A.hasOwnProperty(valueOf) [${obj_A.hasOwnProperty('valueOf')}]`)
log(`obj_A.valueOf instanceof Function [${obj_A.valueOf instanceof Function}]`)

function Fun() {}
Fun.prototype.add = function() {log('add')}
Fun.prototype.remove = function() {}
Fun.prototype.delete = function() {}

let obj_C = new Fun()
let obj_C_prototype = Object.getPrototypeOf(obj_C)

delimiter(4)
log(Fun.prototype)

Fun.prototype.print = function() {}

delimiter(5)
log(Fun.prototype)
log(`obj_C.hasOwnProperty('print') [${obj_C.hasOwnProperty('print')}]`)
log(`Fun.prototype.hasOwnProperty('print') [${Fun.prototype.hasOwnProperty('print')}]`)
log(`obj_C.print instanceof Function [${obj_C.print instanceof Function}]`)
log(`obj_C.print == Fun.prototype.print [${obj_C.print == Fun.prototype.print}]`)

delimiter(6)
log(`obj_C.hasOwnProperty('valueOf') [${obj_C.hasOwnProperty('valueOf')}]`)
log(`Fun.prototype.hasOwnProperty('valueOf') [${Fun.prototype.hasOwnProperty('valueOf')}]`)
log(`Object.prototype.hasOwnProperty('valueOf') [${Object.prototype.hasOwnProperty('valueOf')}]`)

log(`obj_C.valueOf instanceof Function [${obj_C.valueOf instanceof Function}]`)
log(`Fun.prototype.valueOf instanceof Function [${Fun.prototype.valueOf instanceof Function}]`)
log(`obj_C.valueOf == Fun.prototype.valueOf [${obj_C.valueOf == Fun.prototype.valueOf}]`)
log(`Fun.prototype.valueOf == Object.prototype.valueOf [${Fun.prototype.valueOf == Object.prototype.valueOf}]`)

let obj_D = Object.create(obj_A)

delimiter(7)
log('obj_D:', obj_D)
log('obj_D.__proto__:', Object.getPrototypeOf(obj_D))
log(`{obj_D.a, obj_D.b}: {${obj_D.a}, ${obj_D.b}}`)

let obj_E = Object.create(obj_D)

log('\nobj_E:', obj_E)
log(`obj_E.__proto__ == obj_D [${Object.getPrototypeOf(obj_E) == obj_D}]`)
log(`{obj_E.a, obj_E.b}: {${obj_E.a}, ${obj_E.b}}`)

obj_E.a = 3

log(`{obj_E.a, obj_E.b}: {${obj_E.a}, ${obj_E.b}}`)

class Animal {
    constructor(name) {
        this.name = name
    }
  
    sayHello() {
        log(`Animal ${this.name} says hello.`)
    }

    walk() {
        throw Error('Please provide your own implementation')
    }

    static version() {
        log('Version 0.1')
    }
}

class Dog extends Animal {}

class Cat extends Animal {
    sayHello() {
        log(`Cat ${this.name} says meow.`)
    }
}

let dog_A = new Dog('Rex')
let cat_A = new Cat('Tom')

delimiter(8)
dog_A.sayHello()
cat_A.sayHello()

log('dog_A.__proto__:', dog_A.__proto__)
log('dog_A.__proto__.__proto__:', dog_A.__proto__.__proto__)
log(`cat_A instanceof Dog [${cat_A instanceof Dog}]`)
log(`cat_A instanceof Cat [${cat_A instanceof Cat}]`)
log(`cat_A instanceof Animal [${cat_A instanceof Animal}]`)


Dog.version()
Animal.version()
try {
    dog_A.version()
} catch(e) {
    log('Error: static methods cannot be called through class instances.')
}