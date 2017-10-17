let log = console.log
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

function fun_A() {
    return this
}

function fun_B() {
    'use strict'
    return this
}

function fun_C() {
    return this.a
}

function fun_D() {
    'use strict'
    return this.b
}

delimiter(1)
log(`fun_A() == global [${fun_A() == global}]`)
log(`fun_B() == undefined [${fun_B() == undefined}]`)

obj_A = {
    a: 1,
    b: 2,
    fun_A: fun_A,
    fun_D: fun_D
}

delimiter(2)
log(`obj_A.fun_A() == obj_A [${obj_A.fun_A() == obj_A}]`)
log('obj_A.fun_A():', obj_A.fun_A())
log('obj_A.fun_D():', obj_A.fun_D())

delimiter(3)
global.a = 'HCI@FESB'
global.b = 'HCI@FESBv2'
try {
    log('fun_C():', fun_C())
    log('fun_D():', fun_D())
} catch(e) {
    log('fun_D():', e.message)
}
log('fun_A.call(obj_A):', fun_A.call(obj_A))
log('fun_C.call(obj_A):', fun_C.call(obj_A))
log('fun_D.call(obj_A):',fun_D.call(obj_A))

obj_B = {
    a: 3,
    b: 4
}

obj_B.fun_D_nonbound = fun_D
obj_B.fun_D_bound = fun_D.bind(obj_B)

delimiter(4)
log('obj_B.fun_D_nonbound():', obj_B.fun_D_nonbound())
log('obj_B.fun_D_bound():', obj_B.fun_D_bound())

obj_C = {
    b: 5,
    fun_nonbound: obj_B.fun_D_nonbound,
    fun_bound: obj_B.fun_D_bound
}

delimiter(5)
log('obj_C.fun_nonbound() [not bound to obj_B]:', obj_C.fun_nonbound())
log('obj_C.fun_bound() [bound to obj_B]:', obj_C.fun_bound())


