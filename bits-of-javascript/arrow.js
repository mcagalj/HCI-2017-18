'use strict'

let log = console.log
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

let fun_A = function() { log('Hello world') }
let fun_arrow_A = () => log('Hello world')

let fun_B = function(arg) { log(arg) }
let fun_arrow_B = arg => log(arg)

delimiter(1)
fun_A()
fun_arrow_A()

let arg = 'Dynamic message'
fun_B(arg)
fun_arrow_B(arg)

let obj_A = {
    name: 'obj_A',
    fun_C: function() {
        return this.name
    },
    fun_C_arrow: () => this.name
}

delimiter(2)
log('Regular func as an object method:', obj_A.fun_C())
log('Arrow func as an object method:', obj_A.fun_C_arrow())

delimiter(3)
let obj_B = {
    timer_expired: false
}


function fun_D() {
    log(`[*] Starting timer... [${fun_D.name}]`)
    log('[+] this =', this)    
    
    setTimeout(function() {
        log(`\n[*] Timer expired [${fun_D.name}]`)
        log('[+] timer_expired =', this.timer_expired)
        log(`[+] ${this.constructor.name}: this == obj_B [${this == obj_B}]`)
    }, 1000)
}


function fun_E() {
    log(`[*] Starting timer... [${fun_E.name}]`)
    log('[+] this =', this)    
    
    setTimeout(() => {
        log(`\n[*] Timer expired [${fun_E.name}]`)
        log('[+] timer_expired =', this.timer_expired)
        log(`[+] ${this.constructor.name}: this == obj_B [${this == obj_B}]`)
    }, 2000)
}


function fun_F() {
    log(`[*] Starting timer... [${fun_F.name}]`)
    log('[+] this =', this)    
    
    function callback() {
        log(`\n[*] Timer expired [${fun_F.name}]`)
        log('[+] timer_expired =', this.timer_expired)
        log(`[+] ${this.constructor.name}: this == obj_B [${this == obj_B}]`)        
    }

    setTimeout(callback.bind(this), 3000)
}

fun_D.call(obj_B)
fun_E.call(obj_B)
fun_F.call(obj_B)

// Higher-order functions: functions that operate on other functions, as arguments or by returning them.
function multiply(a) {
    return function(b) {
        return a*b
    }
}

delimiter('HoF')
let multiply_by_4 = multiply(4)
let my_array = [2, 3, 4, 5, 6] 
for (let i in my_array) {
    log(my_array[i], multiply_by_4(my_array[i]))
}

// HoF using arrow functions
delimiter('HoF arrow')

let multiply_arrow = a => b => a*b

let multiply_by_5 = multiply_arrow(5)
for (let i in my_array) {
    log(my_array[i], multiply_by_5(my_array[i]))
}