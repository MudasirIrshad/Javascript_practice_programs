/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples:
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

function sevenBoom(arr) {
    let bool;

   for(let i of arr){
       if(typeof i==='string'){
           bool=false
           console.log("array must be in integers");
           break
       }
       else{
           bool=true
       }
   }
   let newArr;
   if(bool==true){
       let arrStr=arr.join('')
       newArr=arrStr.split('')
       
       if(newArr.includes('7')){
           console.log('Boom!');
       }
       else{
           console.log("there is no 7 in the array");
       }
   }

}


sevenBoom([2, 6, 7, 9, 3])
sevenBoom([33, 68, 400, 5])
sevenBoom([86, 48, 100, 66])
sevenBoom([76, 55, 44, 32])
sevenBoom([35, 4, 9, 37])

