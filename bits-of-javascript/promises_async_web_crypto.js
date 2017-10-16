// https://github.com/diafygi/webcrypto-examples

{
    'use strict'

    let log = console.log
    let delimiter = title => log('\n' + '-'.repeat(20) + ' ' + title + ' ' + '-'.repeat(20))

    let my_func = async function() {
        delimiter('Promise')
        log('[*] Generating enc/dec key...')
        crypto.subtle.generateKey({name: 'AES-CTR', length: 256}, true, ['encrypt', 'decrypt'])
            .then(key => log(`[+] crypto_key: ${key}`))
        log('[*] Enc/dec key done.')
        
        
        delimiter('Await')
        log('[*] Generating enc/dec key...')
        const crypto_key = await crypto.subtle.generateKey({name: 'AES-CTR', length: 256}, true, ['encrypt', 'decrypt'])
        log(`[+] crypto_key: ${crypto_key}`)
        log('[*] Enc/dec key done.')
    }

    my_func()
}