let word = "My name is Mudasir"
let arr = word.split("")
let reverseString = ""
for(let i = 1; i <= word.length; i++) {
    reverseString += arr.pop()
}


