// let num = 3749;
// // console.log(num);
// // let str = num.toString();
// // console.log(str);
// // const arr = str.split("");
// // console.log(arr);

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

let j = 0;
for (let i = 0; i < values.length; i++) {

// let countfirst = arr[0];
// let result = '';
// for (let i = 0; i < countfirst; i++) {
//       result += 'M'
//     }
//     console.log(result)
  j = parseInt(num / values[i]);
  num = num%values[i]
  console.log("sdsd", j);
  console.log(num)
  if (j == 0) break;
}

// let countfirst = arr[0];
// let result = '';
// for (let i = 0; i < countfirst; i++) {
//       result += 'M'
//     }
//     console.log(result)

//  A working Logic

// let num = 549;
// const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const symbols = [
//   "M",
//   "CM",
//   "D",
//   "CD",
//   "C",
//   "XC",
//   "L",
//   "XL",
//   "L",
//   "XL",
//   "X",
//   "IX",
//   "V",
//   "IV",
//   "I",
// ];
// let roman = "";
// for (let i = 0; i < values.length; i++) {
//   while (num >= values[i]) {
//     roman += symbols[i];
//     num -= values[i];
//   }
// }
// console.log(roman);



// let num = 3749;
// const values = [1000, 500, 100, 50, 40, 10, 5, 4, 1];
// const symbols = ["M", "D", "C", "L", "XL", "X", "V", "IV", "I"];

// // 2000 + 40 + 9;

// let result = "";

// // for (let j = 0; j < values.length; j++) {
// while (num){
//   for (let i = 0; i < values.length; i++) {
//     if (parseInt(num / values[i]) > 0) {
//       for (let k = 0; k < parseInt(num / values[i]); k++) {
//         result += symbols[i];
//       }
//       num = num % values[i];
//       break;
//     }
//   }
// }

// console.log(result);