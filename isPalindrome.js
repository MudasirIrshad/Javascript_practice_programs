function isPalindrome(word){
    let arr1=[]
    for(let i of word){
        arr1.push(i)
    }
    let arr2=[...arr1].reverse()
   console.log("------------------------------");
   console.log("Original: "+arr1.join(''));
   console.log("Reversed: "+arr2.join(''));
   console.log();
   
   if(arr1.join('')===arr2.join('')){
       console.log("isPalindrome: "+true);
    }
    else{
        console.log("isPalindrome: "+false);
    }
    console.log("------------------------------");
}

isPalindrome("repaper")

isPalindrome("hello")

