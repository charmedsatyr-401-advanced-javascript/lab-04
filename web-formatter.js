'use strict';

const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('./files/pair-programming.txt');

// Instantiate a readline interface from the stream
const rl = readline.createInterface({
  input: stream,
  output: null, //process.stdout,
});

// Overwrite the file with the given data.
// If the file does not exist, create it.
const write = data => {
  fs.writeFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};

// Append given data to a file
const append = data => {
  fs.appendFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};

// Accept input and use helper functions to modify and write it
const tag = input => {
  if (input === '6 Reasons for Pair Programming') {
    write(`<article><h2>${input}</h2>`);
  } else if (input === `one less hurdle to overcome.`) {
    append(`${input}</li></ul></article>`);
  } else if (
    input === `Wow, all that? Let’s take a look!` ||
    input === `Why pair program?` ||
    input === `How does pair programming work?`
  ) {
    append(`<h2>${input}</h2>`);
  } else if (/^\d.*/g.test(input)) {
    const section = `<h3>${input}</h3>`;
    append(section);
  } else if (/^\D.*/g.test(input)) {
    let sentence = input.split('. ');
    sentence = sentence.join('.</li><li>');
    sentence = `<ul><li>${sentence}</li></ul>`;
    append(sentence);
  }
};

// Read the stream line by line
// and tag the data that comes through
rl.on('line', data => {
  tag(data);
});
