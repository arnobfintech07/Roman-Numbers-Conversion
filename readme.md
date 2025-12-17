# Roman Numeral Converter

A simple JavaScript script that converts a given integer into its Roman numeral equivalent.

## Description

This project provides a straightforward, single-file JavaScript solution for the classic problem of converting integers to Roman numerals. The core algorithm uses a predefined mapping of numeral values and their corresponding Roman symbols to efficiently build the result.

The project was created as a learning exercise to explore algorithms and data structures in JavaScript.

## Getting Started

### Prerequisites

You need a modern web browser or a JavaScript runtime environment which can be run in Console

### Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone github.com
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Roman-Numers-Conversion
    ```

## Code

The conversion logic is contained within a single block of JavaScript code:

```javascript
// A fuction has been created named as romanNumerals and num as parameter

function romanNumerals(num) {
  const values = [1000, 500, 100, 50, 40, 10, 5, 4, 1];
  const symbols = ["M", "D", "C", "L", "XL", "X", "V", "IV", "I"];
  
  //at first result will be empty and all the symbols will store after the completion of a loop
  
  let result = "";
  
  //this while loop will run until the value of num is 0
  while (num) {

    //added the logic to satisfy all the test cases
    for (let i = 0; i < values.length; i++) {
      if (num >= 9 && num < 10) {
        result += "IX";
        num -= 9;//num will be 0 at last
        break;
      }
       else if (num >= 90 && num < 100) {
       result += "XC";
       num -= 90;
        break;
       }
        else if (num >= 900 && num < 1000) {
         result += "CM";
         num -= 900;
        break;
       }

      if (parseInt(num / values[i]) > 0) {
        for (let k = 0; k < parseInt(num / values[i]); k++) {
          //result will store the symbols one by one
          result += symbols[i];
        }
        //the remainder will store in num and the num will be updated
        num = num % values[i];
        break;
      }
    }
  }
  return result;
}
console.log(romanNumerals(1994));