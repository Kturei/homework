function helloName(name) {
  console.log(`Hello ${name}`);
}

helloName('alex');

// ===========================

const numbers = [5, 12, 3, 25, 8, 15, 9, 30, 1, 18];

function numberSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      console.log(arr[i]);
    }
  }
}

numberSort(numbers);

// =====================

function calcut(firstNum, secondNum, operation) {
  if (operation === 'minus') {
    return firstNum - secondNum;
  } else if (operation === 'plus') {
    return firstNum + secondNum;
  } else if (operation === 'division') {
    return firstNum / secondNum;
  } else (operation === 'mult')
  return firstNum * secondNum;
}

console.log(calcut(5, 10, 'mult'));
