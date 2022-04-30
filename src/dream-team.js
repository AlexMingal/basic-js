const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (members === ' ') return false;
    
  if (Array.isArray(members)) { 

    let arr = [...members];
    let result = [];

    arr.forEach(el => {

      if (typeof el !== 'string')  return false ;
      if (typeof el  == 'number')  return false ;
      if (typeof el == 'object' )  return false ;
      if (el[0] === ' ')  { result.push(el.trim()[0].toUpperCase()); return false};
      if (typeof el  === 'string' ) { result.push(el[0].toUpperCase())}

    })
 
  return result.sort().join('');

  } else return false};


createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
])

module.exports = {
  createDreamTeam
};
