/*Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
*/

function DigitsInNumber(num){
    let arr=Array.from(String(num),Number)
    let count=0
    for(let i of arr){
        if(!Number(i)){
            continue
        }
        else{
            count++
        }
    }
    console.log(count);
}

DigitsInNumber(-.5235645)