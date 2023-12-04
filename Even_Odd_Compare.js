
function evenOrOdd(str) {
    let evenSum=0
    let oddSum=0

    for(let i of str){
        let num=parseInt(i)
        if(num%2==0){
            evenSum+=num
        }
        else{
            oddSum+=num
        }
    }
    if(evenSum==oddSum){
		return "Even and Odd are the same"
	}
	else if(evenSum>oddSum) {
		return "Even is greater than Odd"
	}
	else{ 
		return "Odd is greater than Even"
	}
    
}