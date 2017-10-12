'use stict'

function worker_function() {
    let delay = ms => {
        let start_time = Date.now()
        while(Date.now() < start_time + ms) {}
    }
    
    onmessage = e => {
        postMessage(`[*] Timer started at: ${Date.now()/1000}`)
        delay(e.data[1])
        postMessage(`[*] Timer expired at: ${Date.now()/1000}`)
    }    
}