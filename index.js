'use strict';

const fs = require('fs');

// ASCII string for a forEach function
const data =
  '91 39 84 111 109 39 44 39 83 97 108 108 121 39 44 39 72 97 114 114 121 39 93 46 102 111 114 69 97 99 104 40 110 61 62 99 111 110 115 111 108 101 46 108 111 103 40 110 41 41 59';

/**
 * Convert an ASCII string into a Buffer.
 * Write the buffer to `./files/loop.js`.
 * @param  {string} str
 */
const convert = str => {
  // Convert the string to an array of integers
  const arr = str.split(' ').map(n => parseInt(n));

  // Create a new array of 8-bit, unsigned integers of ASCII's length
  const buff = new Uint8Array(arr.length);

  // Assign the elements of `ascii` to `arr`
  for (let i = 0; i < arr.length; i++) {
    buff[i] = arr[i];
  }

  /**
   * Because no encoding is specified as the 3rd argument, writeFile
   * assumes the data type is a buffer.
   * Ideally this step would be written as a separate function, but
   * that appears to be a breaking change.
   */
  fs.writeFile('./files/loop.js', buff, err => {
    if (err) {
      console.error(err);
    }
    console.log('Data written!');
  });
};

// Run the function
convert(data);

module.exports = exports = { convert };
