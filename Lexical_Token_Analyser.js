/*
Lexical analysis is the first phase of language processing where a sequence of characters (source code) is transformed into a sequence of meaningful units called tokens. Tokens are the building blocks of a programming language and represent fundamental elements such as keywords, identifiers, literals, operators, and punctuation. The primary goal of lexical analysis is to break down the source code into these tokens, discarding any unnecessary whitespace or comments, to facilitate further processing in the compiler or interpreter.
*/

function LecicalTokenAnalyser(str){
    let tokens={
        operator:['=','==','===','<','>','>=','<=',"!",'!=','!==','+','-','*','/'],
        separator:[',','(',')',';','{','}','[',']'],
        number:['1','2','3','4','5','6','7','8','9','0'],
        keyword:['if','while','else','for','return','function','let','var','const']
    }

    let operators=[]
    let separators=[]
    let numbers=[]
    let keywords=[]
    let identifiers=[]

    var strarr=str.split(' ')
    
    for(let i of strarr){
        if(tokens.operator.includes(i)){
            operators.push(i)
        }
        else if(tokens.separator.includes(i)){
            separators.push(i)
        }
        else if(tokens.number.includes(i)){
            numbers.push(i)
        }
        else if(tokens.keyword.includes(i)){
            keywords.push(i)
        }
        else{
            identifiers.push(i)
        }

    }
    console.log(`Operators in given code are: ${operators}`);
    console.log();
    console.log(`Separators in given code are: ${separators}`);
    console.log();
    console.log(`Numbers in given code are: ${numbers}`);
    console.log();
    console.log(`KeyWords in given code are: ${keywords}`);
    console.log();
    console.log(`Identifiers in given code are: ${identifiers}`);
}


LecicalTokenAnalyser("for ( var i of arr = ) { let numbers = [ 1 , 2 , 3 ] }")




/* this is code space sensitive means you have to give space after every code word you write for best results */