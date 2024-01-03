function longestString(arr){
    arr.sort((a,b)=>{return a.length-b.length})
    console.log(arr.pop());
}


longestString(["hello","me","why are you","My name is Mudasir Irshad"])