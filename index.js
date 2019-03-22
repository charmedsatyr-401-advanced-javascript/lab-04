'use strict';

const fs = require('fs');

/**
 Convert a string to an ASCII array
 * @param {string} str
 **/
const strToCharCode = str => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
  }
  return arr;
};

/**
 * Convert an array of ASCII codes into a Buffer.
 * @param {array} arr
 */
const charCodeToBuffer = arr => {
  // Create a new array of 8-bit, unsigned integers of ASCII's length
  const buff = new Uint8Array(arr.length);

  // Assign the elements of `ascii` to `arr`
  for (let i = 0; i < arr.length; i++) {
    buff[i] = arr[i];
  }
  return buff;
};

/**
 * Because no encoding is specified as the 3rd argument, writeFile
 * assumes the data type is a buffer.
 * @param {buffer} buffer
 * @param {path} path
 */
const bufferToFile = (buffer, path) => {
  fs.writeFile(path, buffer, err => {
    if (err) {
      console.error(err);
    }
    console.log('Data written!');
  });
};

// Run the functions on a test case
const textToWrite = `'use strict';['Tom', 'Brunhild', 'Voldemort'].forEach(n=>console.log(n));`;
bufferToFile(charCodeToBuffer(strToCharCode(textToWrite)), './files/loop.js');

// Export functions
module.exports = exports = { strToCharCode, charCodeToBuffer, bufferToFile };
