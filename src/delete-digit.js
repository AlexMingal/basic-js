const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('').map(Number),
      maxim = Math.max(...arr);

      if (arr.indexOf(maxim) === 0) { arr.splice(arr.indexOf(Math.min(...arr)), 1); }
      else {
      arr.splice(arr.indexOf(maxim)-1, 1);
      }

  console.log(arr.join(''));
  return Number(arr.join(''));
  
}

deleteDigit(342);

module.exports = {
  deleteDigit
};
