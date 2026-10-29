let arr = [4,8,2,11,6,7,10]

const findMax = function(sum){
    let max = 0
    for(let i of sum){
        if(max<i){
            max = i
        }
    }
    return max
}
console.log(findMax(arr))

const add = arr.reduce((a,b)=>a+b)
console.log(add)

function oddNumber(arrs){
    let count = 0
    for(let i of arrs){
        if(i%2 !== 0){
            count++
        }
    }
    return count
}
console.log(oddNumber(arr))
