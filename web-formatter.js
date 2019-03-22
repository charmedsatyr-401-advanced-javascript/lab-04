'use strict';

const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('./files/pair-programming.txt');

const rl = readline.createInterface({
  input: stream,
  output: null, //process.stdout,
});

const append = data => {
  fs.appendFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};
const write = data => {
  fs.writeFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};

/* Using only buffers and bit manipulation, read the file `pair-programming.txt` from the `files` folder and make the following transformations:
 * Wrap all of the content within `<article>` tags
 * Wrap each section title in an `<h2>`
 * Convert each sentence in each paragraph into a list item.
 * Convert each of the numbered sections in the bottom of the document to `<h3>` tags.
 * You may not use .toString()
 * Save the file as `pair-programming.html`
 * Verify your work by rendering it in a browser
 */
rl.on('line', input => {
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
});

// buffer last index of
// buffer slice
// bufer concat
