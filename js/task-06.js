console.log('Задание 6, см.alert');

let input;
const numbers = [];

const arrSum = function arrSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
};

while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
}

alert(`Введены числа: ${numbers},
Общая сумма чисел равна ${arrSum(numbers)}`);
