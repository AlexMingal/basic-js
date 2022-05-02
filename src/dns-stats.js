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

  if(domains.length == 0) return {};

  let result = {};
  

  for(let i = 0; i < domains.length; i++)
  {
    domains[i] = domains[i].split('.').reverse();
  }
  
  let keys = [];
  
  for (let i = 0; i < domains.length; i++) {
    for (let j = 0; j < domains[i].length; j++){
      keys.push(domains[i].slice(0, j+1));
    }
  }
    
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < keys[i].length; j++){
      keys[i][j] = '.' + keys[i][j];
    }   
    keys[i] = keys[i].join("");
  }
  
  let box = new Set(keys);
  
  for (const entry of box){
    let count = keys.filter(elem => elem === entry);
    result[`${entry}`] = count.length;
  }
  
  console.log(result);
  return result; 

}





  getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])


  
module.exports = {
  getDNSStats
};
