// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
// Excellent gist: https://gist.github.com/gokulkrishh/d493ecdcb0e2dbb6fe5ad3e678dd9f89
'use stict'

let log = console.log
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

function delay(ms, logging=false) {
    let start_time = Date.now()
    logging ? log('[*] Timer started at:', Date.now()/1000) : null
    while(Date.now() < start_time + ms) {}
    logging? log('[*] Timer expired at:', Date.now()/1000) : null
}

delimiter(1)
log('[*] Before delay()')
delay(5000, true)
log('[*] After delay()')

// delay(5000) vs cooperative_delay(5000)
// Here we demonstrate JavaScript concurrency model
// based on an 'event loop'

let delay_2 = (ms, whole_part, reminder) => {
    delay(ms)

    if (whole_part > 0) {
        whole_part--
        setTimeout(() => delay_2(ms, whole_part), 0) 
    } else {
        delay(reminder)
        log('[*] Cooperative timer expired at', Date.now()/1000)
    }
}

let cooperative_delay = (ms, resolution=50) => {
    let whole_part = Math.floor(ms/resolution)
    let reminder = ms % resolution
    log('[*] Cooperative timer started at', Date.now()/1000)
    delay_2(resolution, whole_part)
}

delimiter(2)
cooperative_delay(10000)