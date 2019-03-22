'use strict';

const fs = require('fs');

// ASCII string for a forEach function
let ascii =
  '91 39 84 111 109 39 44 39 83 97 108 108 121 39 44 39 72 97 114 114 121 39 93 46 102 111 114 69 97 99 104 40 110 61 62 99 111 110 115 111 108 101 46 108 111 103 40 110 41 41 59';

// Convert the string to an array of integers
ascii = ascii.split(' ').map(n => parseInt(n));

// Create a new array of 8-bit, unsigned integers of ASCII's length
const arr = new Uint8Array(ascii.length);

// Assign the elements of `ascii` to `arr`
for (let i = 0; i < ascii.length; i++) {
  arr[i] = ascii[i];
}

// Write the buffer to `./files/loop.js`.
// Because no encoding is specified as the 3rd argument, writeFile
// assumes the data type is a buffer.
fs.writeFile('./files/loop.js', arr, err => {
  if (err) {
    console.error(err);
  }
  console.log('Data written!');
});
