const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) return 'Unable to determine the time of year!'; 

  if (date) {

    if (date && date.getMonth && date.getMonth.call) {
      if (typeof date !== 'object') { console.log('Invalid date!'); throw new Error ("Invalid date!") }

      let season = date;

      if (season.getMonth() > 1 && season.getMonth() <= 4) {  console.log('Spring'); return 'spring'; }
      if (season.getMonth() <= 1 || season.getMonth() == 11) {  console.log('winter'); return 'winter'; }
      
      if (season.getMonth() >= 5 && season.getMonth() <= 7) {  console.log('Summer'); return 'summer'; }
      
      if (season.getMonth() >= 8 && season.getMonth() <= 10) {  console.log('fall'); return 'fall'; }
    }
  } else { 
    console.log ('hmm!');
    throw new Error ('Unable to determine the time of year!'); }

}


getSeason();

module.exports = {
  getSeason
};
