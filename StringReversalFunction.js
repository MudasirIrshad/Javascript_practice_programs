let word = "Pakistan is my country"

function wordReversalFunction(word){
    let arr = word.split("")
    let reverseString = ""
    for(let i = 1; i <= word.length; i++) {
        reverseString += arr.pop()
    }
    console.log(reverseString)
}

wordReversalFunction(word)


