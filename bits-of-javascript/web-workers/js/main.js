'use strict'

let log = console.log
let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

let delay = ms => {
    let start_time = Date.now()
    while(Date.now() < start_time + ms) {}
}

if (window.Worker) {
    // Normally you would create a new web worker object as follows:
    // const web_worker = new Worker('my_web_worker.js').
    // However, due to security restrictions Chrome does not allow
    // to load Web Worker when running from a local file.
    // This is a workaround (https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker). 
    const web_worker_A = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'})));
    web_worker_A.postMessage(['start', 5000])
    web_worker_A.onmessage = e => log(e.data)
}