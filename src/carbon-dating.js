const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
 
  if (isNaN(parseFloat(sampleActivity))) { console.log('Not a number'); return false; }

  if (sampleActivity >= 15 || parseFloat(sampleActivity) <= 0) { console.log('Out of range'); return false; }

  if (typeof sampleActivity === 'string' && typeof(parseInt(sampleActivity, 10)) == 'number') 
    {
    console.log(Math.ceil(Math.log(15/sampleActivity) / 0.693 * 5730));
    return Math.ceil(Math.log(15/sampleActivity) / 0.693 * 5730);
    }
  else 
    {
    console.log("Something isn't ok with " + sampleActivity);
    return false;
  }
}

dateSample('tgt');

module.exports = {
  dateSample
};
