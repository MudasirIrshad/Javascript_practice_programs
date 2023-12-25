function wait(n){
    let time=n*1000
    let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise Resolved in ",n,"sec");
            resolve("Done")
        },time)
    })
    promise.then((data)=>{
        console.log(data);

    })
}
console.log("Executing...");
wait(3)