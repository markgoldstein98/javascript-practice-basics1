// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(words, char){
    let last = -1
    
    for (let index = 0; index < words.length; index++) {
        if (words[index] === char) {
            last=index // nekünk az kell hogy hanyadik indexen van
        }
        
        
    } return last
}

console.log(stringLastIndexOf('elephant','e'))