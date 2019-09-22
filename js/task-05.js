console.log('Задание 5');

const checkForSpam = function checkForSpam(str) {
  str = str.toLowerCase();
  const isStrClear = str.includes('spam') || str.includes('sale');
  return isStrClear;
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
