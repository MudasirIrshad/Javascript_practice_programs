function secondLargest(arr=[]){
    arr.sort((a,b)=>a-b)
    console.log(arr);
    let num=0
    if(arr.length<=2){
        console.log("Array length is less than 2, length must be more than 2");
    }
    else{
        for(let i = 0 ;i<arr.length-1;i++){
            num=arr[i]
        }
        console.log('Second Last number in the arr:',arr,'is:',num);
    }
}

secondLargest([11,900,400])
