const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {

  let trueletters =['A', 'B', 'C', 'D', 'E', 'F', '-'],
      str = n.split('');

 // console.log(str);
  for (i of str) {
    if (isNaN(i)) {
      if (!trueletters.includes(i)) 
        {console.log(false); 
           return false }
      }
 //   console.log(i);
  }

//  console.log(true);
  return true;

}


// isMAC48Address('not a MAC-48 address');

module.exports = {
  isMAC48Address
};
