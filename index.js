let num = 3749
console.log(num)
let str = num.toString()
console.log(str)
const arr = str.split("")
console.log(arr)
for(let i = 0; i<arr.length; i++){
    console.log(arr[0]*1000)
}

let countfirst = arr[0];
let result = '';
for (let i = 0; i < countfirst; i++) {
  result += 'M'
}
console.log(result)

