const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let arr = domains.join(),
      sub  = '';
      domain = '',
      counter = 0; 

  console.log(domains);
  console.log(arr);

  for (i = arr.length-1; i > 0; i--) {
    if (arr[i] === '.') {
      sub = arr.substring(i);
      console.log(sub);

      domains.forEach(el => {if (el.includes(sub)) counter++ } )
      console.log(counter);
    }
  
  


  }
  

}







  getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])

module.exports = {
  getDNSStats
};
