
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
