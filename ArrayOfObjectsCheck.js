let arr1=[
    {
        name:"Mudasir",
        age:18
    },
    {
        name:"Ahmed",
        age:20
    },
    {
        name:"Mahmoud",
        age:16
    },
    {
        name:"Abdullah",
        age:50
    }
]

arr2 = arr1.map((i)=>{
    if(i.age < 18){
     return {
         name:i.name,
         age:i.age,
         status:"Under 18"
     }
    }
    else{
        return {
            name:i.name,
            age:i.age,
            status:"Over or Equal 18"
        }
    }
})
console.log(arr2);