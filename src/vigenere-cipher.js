const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  

  encrypt() {
    const engAlf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let source = arguments[0],
        key = arguments[1],
        keynum = 0;

    keynum = (engAlf.indexOf(source[1].toUpperCase()) + engAlf.indexOf(key[1].toUpperCase()) / 26);
    // console.log(engAlf.indexOf(source[1].toUpperCase()));
    console.log(engAlf[Math.floor(keynum)]);
    

  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

let message = new VigenereCipheringMachine('Attack');
  message.encrypt('attack at dawn!', 'alphonse');


module.exports = {
  VigenereCipheringMachine
};
