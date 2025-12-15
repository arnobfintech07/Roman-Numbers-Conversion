let num = 3749;
const values = [1000, 500, 100, 50, 40, 10, 5, 4, 1];
const symbols = ["M", "D", "C", "L", "XL", "X", "V", "IV", "I"];

// 2000 + 40 + 9;

let result = "";

// for (let j = 0; j < values.length; j++) {
while (num){
  for (let i = 0; i < values.length; i++) {
    if (parseInt(num / values[i]) > 0) {
      for (let k = 0; k < parseInt(num / values[i]); k++) {
        result += symbols[i];
      }
      num = num % values[i];
      break;
    }
  }
}

console.log(result);
