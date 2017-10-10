/**
 * Difference between the strict and non-strict mode.
 * http://qnimate.com/javascript-strict-mode-in-nutshell
 */ 
'use strict'

// 'log' vs 'let log'
let log = console.log;
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

delimiter(1)
let obj = {a: 1, b: 2}
log(obj)

// 'this' reference in strict mode is 'undefined'
function this_in_strict() {
    log(this)
}
this_in_strict()

// Block scoped variables
delimiter(2)
// var test = 'test'
// {
//     var test = 'best'
// }
// log(test)

let test = 'test'
//let test = 'best'
{
    //var test = 'best'
    let test = 'best'
}
log(test)