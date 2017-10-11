 'use strict'

let log = console.log;
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

let obj_A = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}


delimiter(1)
try {
    log(a, b, c, d)
} catch(e) {
    log(e.name, e.message)
}


delimiter(2)
let { a, c } = obj_A

log(a, c)
try {
    log(b)
} catch(e) {
    log(e.name, e.message)
}


delimiter(3)
let { a: Ana, d: Darko } = obj_A
log('Ana:', Ana)
log('Darko:', Darko)


delimiter(4)
let print_d_from_object = ({d}) => d ? log(d) : log('The object does not have a property named d')
print_d_from_object(obj_A)

let obj_B = {
    e: 1,
    f: 2,
    g: 3
}

print_d_from_object(obj_B)

//=====================================================================
// NOTE: Some examples in the sequel that use the rest/spread ("...") 
// operator might not work with Node.js. You can test them in a browser 
// (e.g., the browser's console).
//=====================================================================
delimiter(5)
// Works also with arrays

let [e, f] = [1, 2, 3, 4]
log(e, f)

// What about the rest of the array?
// [a, ...ostatak] = [1, 2, 3, 4]
// log('a:', a)
// log('ostatak:', ostatak)


delimiter(5)
// Create a copy of an object.
let obj_A_copy = {...obj_A}
log('obj_A:', obj_A)
log('obj_A_copy:', obj_A_copy)
log(`obj_A == obj_A_copy [${obj_A == obj_A_copy}]`)

obj_A_copy.a = 5
log('obj_A:', obj_A)
log('obj_A_copy:', obj_A_copy)

delimiter(6)
// How not to make a copy of an object.
let obj_B_copy = obj_B
log('obj_B:', obj_B)
log('obj_B_copy:', obj_B_copy)
log(`obj_B == obj_B_copy [${obj_B == obj_B_copy}]`)

obj_B_copy.e = 5
log('obj_B:', obj_B)
log('obj_B_copy:', obj_B_copy)
