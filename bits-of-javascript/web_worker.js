// To be run from the browser.

function delay(ms, logging=false) {
    let start_time = Date.now()
    logging ? log('[*] Timer started at:', Date.now()/1000) : null
    while(Date.now() < start_time + ms) {}
    logging? log('[*] Timer expired at:', Date.now()/1000) : null
}

delay(5000)