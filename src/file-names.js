const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let result = [],
      counter = 1,
      namestr = '';

  for (i of names) {
    if (result.includes(i)) {
      namestr = i + `(${counter})`

      while (result.includes(i + `(${counter})`)) {
        counter ++;
      }
      namestr = i + `(${counter})`

    } else {
      namestr = i;
    }

    result.push(namestr);

  }
 // console.log(names);
 // console.log(result);

  return result;
}

// renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])

module.exports = {
  renameFiles
};
