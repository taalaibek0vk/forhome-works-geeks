// 1.

// function getTypeOfData(number) {
//   console.log(typeof number);
// }
// getTypeOfData(44)


// 2.
// function calculate(num1, operator, num2) {
//   var result;
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       console.log(result);
//       break;
//     case '-':
//       result = num1 - num2;
//       console.log(result);
//       break;
//     case '*':
//       result = num1 * num2;
//       console.log(result);
//       break;
//     case '/':
//       result = num1 / num2;
//       console.log(result);
//       break;
//     default:
//       console.log('Некорректный оператор');
//   }
//   return result;
// }
// calculate(40, '*', 5);



// 3.


var array = [-1, 0, 5, 7, 15, 26]

function findArr(i, array) {
  var result = findArr(array, 5)
  return console.log(findArr.indexOf(i))
}

findArr(findArr)
