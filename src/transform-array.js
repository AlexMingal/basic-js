const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) { throw new Error(`'arr' parameter must be an instance of the Array!`)};

  let x = '',
      y = '',
      result = arr;

  for (i = 0; i <= arr.length; i++) {

    if (arr[i] == '--double-next') {
      if (i == arr.length-1) {result.splice(i, 1)}
      else {
        y = arr.indexOf(arr[i]) + 1;
        result.splice(i, 1, y);
      }
    }  

    if (arr[i] == '--double-prev') {
      if (i == 0) { result.splice(i, 1)}
      else {
      y = arr[i-1];
      result.splice(i, 1, y);
      
      }
    }  

    if (arr[i] == '--discard-next') {
      if (i == arr.lentgh-1) { result.splice(i, 1)}
      else result.splice(i, 2)
      i--;
    }  

    if (arr[i] == '--discard-prev') {
      if (i == 0 || arr[i] == 'undefined') { result.splice(i, 1);  i--;}
      else result.splice(i-1, 2);

    }  

  }
  console.log(result.join(','));
  return result;
}

transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);

module.exports = {
  transform
};
