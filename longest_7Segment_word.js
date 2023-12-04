/*
Longest Word in a 7 Segment Display
Given an array of words, return the longest word which can fit on a 7 segment display.

Image of 7 segment display: https://edabit-challenges.s3.amazonaws.com/clock_xkmdxe.jpeg

Letters which do not fit on a 7 segment display are k, m, v, w and x.
Therefore, do not count words which include these letters.
Examples
longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""
*/

function longest7SegmentWord(arr){
    let newarr=[]
    for(let i of arr){
        if(i.includes('k') || i.includes('m') || i.includes('v') || i.includes('w') ||i.includes('x')){
            continue
        }
        else{
            newarr.push(i)
        }
    }
    newarr.sort((a,b)=>{return a.length-b.length})
    let sarr=newarr.slice()
    let word=sarr.pop()
    console.log(`the longest 7 segment word from [ ${newarr} ] is --> ${word}`);
}




longest7SegmentWord(["knighthood", "parendtal", "parentalbe" , "fridge", "clingfilm"])
