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


