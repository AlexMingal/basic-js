const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr =[],
      result = {},
      resultStr = '',
      strarr = str.split(''),
      propertyName = '',
      counter = 0;



  for (i =0; i<strarr.length; i++) {
 
    if (strarr[i] !== strarr[i+1] && strarr[i] !== strarr[i-1]) {
      resultStr += strarr[i] 
    } else {
      counter++;
    }

    if (counter > 0 && strarr[i] !== strarr[i+1]) {
      resultStr += counter + strarr[i]
      counter = 0;
    }
  }

 // console.log(resultStr)
  return resultStr;  
}

// encodeLine('abbcca');

module.exports = {
  encodeLine
};




 /*  for (i in strarr) {
  //  console.log(strarr[i])
    if (!result.hasOwnProperty(strarr[i])) {
      propertyName = strarr[i];
      result[propertyName] = strarr[i];
    }
    else {
      result[propertyName] += strarr[i];
    }  
  }

  for (prop in result) {
    if (Object.keys(result[prop]).length > 1 ) {
    resultStr += Object.keys(result[prop]).length + prop;
    } else {
    resultStr += prop;
    }
  }

  

  console.log(strarr);
//  console.log(result)
  console.log(resultStr)
  return resultStr; */