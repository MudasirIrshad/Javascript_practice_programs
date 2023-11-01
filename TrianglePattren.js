
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
function StarPattern(rows){
    let star="*"

    for(var i=0;i<rows;i++){
        for(var j=i;j<rows;j++){
            process.stdout.write(star)
        }
        console.log();
    }
}

StarPattern(8)
