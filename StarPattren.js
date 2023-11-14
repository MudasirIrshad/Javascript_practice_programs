
/*
Pattern:
------------------------------
******
*****
****
***
**
*
-------------------------------
*/
function StarPattern1(rows){
    let star="*"
    let space=" "
    for(var i=0;i<rows;i++){
        for(var j=i;j<rows;j++){
            process.stdout.write(star)
        }
        console.log();
    }
}
StarPattern1(5)



/*
Pattern:
------------------------------
******
 *****
  ****
   ***
    **
     *
-------------------------------
*/

console.log();

function StarPattern2(rows){
    let star="*"
    let space=" "

    for(var i=0;i<rows;i++){
        for(let k=0;k<i;k++){
            process.stdout.write(space);
        }
        for(var j=i;j<rows;j++){
            process.stdout.write(star)
        }
        
        console.log();
    }
    
}
StarPattern2(5)

console.log();
/*
Pattern:
------------------------------
*
**
***
****
*****
-------------------------------
*/
let str=''
for (let i =1;i<=5;i++){
    str+='*'
    console.log(str);
}



/*
Pattern:
------------------------------
*****
*   *
*   *
*   *
*****
-------------------------------
*/
console.log();
function compLine(n){
    let str=''
    for(let i = 0; i<n;i++){
        str+='*'
    }
    console.log(str);
}
function spaceBetween(n){
    let str=''
    str+='*'
    for(let i =0;i<n-2;i++){
        str+=' '
    }
    str+='*'
    console.log(str);
}
function fullPattern(n){
    compLine(n)
    for(let i =0;i<n-2;i++){
        spaceBetween(n)
    }
    compLine(n)
}

fullPattern(10)


console.log();
/*
Pattern:
------------------------------
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
-------------------------------
*/

function SquareShape(n){
    let str=''
    for (let i =0;i<n;i++){
        str+='*  '
    }
    for(let i=0;i<n;i++){
        console.log(str);
    }
}
SquareShape(5)


console.log();
/*
Pattern:
------------------------------

* * * * *
 * * * * *
  * * * * *
   * * * * *

-------------------------------
*/
function RhombusPattern(n){
    let str=''
    for(let i=0;i<n;i++){
        str+='* '
    }
    let space=''
    console.log(str);
    for(let i=1;i<n;i++){
        space+=' '
        console.log(space+str);
    }
}

RhombusPattern(5)