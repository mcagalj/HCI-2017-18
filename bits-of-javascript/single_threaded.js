// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
'use stict'

let log = console.log

function delay(ms) {
    let start_time = Date.now()
    log('[*] Timer started...')
    while(Date.now() < start_time + ms) {}
    log('[*] Timer expired')
}

log(1)
delay(2000)
log(2)
delay(2000)
log(3)