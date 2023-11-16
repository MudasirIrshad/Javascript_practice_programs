function ExtraSpaceRomving(string){
    
    
    let narr=[]
    let arr = string.split(" ");
  
    for (let i of arr){
        if(i!==''){
            narr.push(i)
        }
       
    }
   let result=narr.join(" ")
   console.log(result);
}

ExtraSpaceRomving("My   Name  Mudasir    and              i am                   a boy.")