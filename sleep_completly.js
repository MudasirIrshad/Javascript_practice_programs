/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let ctr=seconds/1000-1
    return new Promise((resolve,reject)=>{
        console.log(`Thread takes ${seconds} MilliSeconds to be free`);
        console.log("Time Remaining:");
        let interval = setInterval(() => {
            console.log(`${ctr}`);
            ctr--
            if(ctr==0){
                clearInterval(interval)
            }
        }, 1000);
        setTimeout(()=>{
            resolve()
        },seconds)
    })
}

sleep(5000).then((data)=>{
    console.log(`Thread is now free.`);
})