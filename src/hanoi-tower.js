const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

  let counter = 0,
      time = 0,
      resObj = {};


      /* recursion wasn't needed :((( 
  function Solve(n, a,b,c) {
      if (n > 0) {
          counter++;
          Solve(n-1, a, c, b);
 //       console.log('Перемещаем диск из: ', a, ' на: ', b);
          Solve(n-1, c, b, a);
      }
 //     console.log(counter);
      return counter;
    }
  Solve(disksNumber, '1', '2', '3');
  
  END OF RECURSION   */

  counter = (Math.pow(2, disksNumber)) - 1;
  resObj.turns = counter;
  resObj.seconds = Math.floor(counter / turnsSpeed * 3600);

 // console.log(resObj);
  return resObj;
}


// calculateHanoi(9, 4308);


module.exports = {
  calculateHanoi
};