function areaOfCountry(name, area) {
    let worldLandmas=148940000
let countryAreaPerc=((area/worldLandmas)*100).toFixed(2)    
return(`"${name} is ${countryAreaPerc}% of the total world's landmass"`);
}

console.log(areaOfCountry("USA", 9372610));