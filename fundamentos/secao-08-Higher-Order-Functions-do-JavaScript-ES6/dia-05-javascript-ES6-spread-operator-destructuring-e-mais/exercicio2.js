const sum = (...num) => {
 return num.reduce((acc, curr)=> acc + curr)
}

console.log(sum(4, 5, 6))