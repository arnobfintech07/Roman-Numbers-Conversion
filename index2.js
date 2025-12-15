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
