function randomNArray(){
    //Creates holder array values 1->10,000, with indexes 0->9,999
    let counter = 1
    let holder = new Array(10000).fill().map(()=>counter++)
    
    let result = []
    //Loop once, O(n)
    while(holder.length){
        result.push(holder.splice(Math.round(Math.random()*holder.length-1),1)[0])
    }
    return result
}   
console.log(randomNArray())

/* Personally I prefer this because its more general for any number of N numbers, 1->N. Obviously not what you asked, but I think this is better*/
function randomNArrayIdeal(N){
    let counter = 1
    let holder = new Array(N).fill().map(()=>counter++)
    let result = []
    while(holder.length){
        result.push(holder.splice(Math.round(Math.random()*holder.length-1),1)[0])
    }
    return result
}   
console.log(randomNArrayIdeal(10000))