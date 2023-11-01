function FibonacciSeries(seriesLength){
    let swap=0
    let first=0
    let second=1

    let finalSeries=[]

    finalSeries.push(first, second)

    for(let i=2;i<=seriesLength;i++){
        swap=first+second
        first=second
        second=swap
        finalSeries.push(swap)
    }
    console.log(finalSeries);
}
// [0,1,1,2,3,5,8,13]

FibonacciSeries(10)