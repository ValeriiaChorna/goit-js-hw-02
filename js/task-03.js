console.log('Задание 3');

const findLongestWord = function findLongestWord(string) {
  const stringArray = string.split(' ');

  let longestWord = stringArray[0];

  for (let i = 1; i < stringArray.length; i += 1) {
    const currentWord = stringArray[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
