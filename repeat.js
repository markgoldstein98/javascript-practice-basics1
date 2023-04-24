// add whatever parameters you deem necessary - good luck!
function repeat(string, num){
    let stringNum= '';

    for (let index = 0; index < num; index++) { // nem adjuk meg neki hányszor fussuk,
                                                // num tárolja ezt a paramétert 
            stringNum += string
            
    }
    return stringNum;
}
console.log(repeat('Apple',3))
