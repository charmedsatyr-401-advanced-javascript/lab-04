'use strict';

const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('./files/pair-programming.txt');

// Instantiate a readline interface from the stream
const rl = readline.createInterface({
  input: stream,
  output: process.stdout, // null, //process.stdout,
});

/**
 * @param  {stream} data
 * Overwrite the file with the given data.
 * If the file does not exist, create it.
 **/
const write = data => {
  fs.writeFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};

/**
 * Append given data to a file
 * @param  {stream} data
 */
const append = data => {
  fs.appendFile('./article.html', data, err => {
    if (err) {
      console.error(err);
    }
  });
};

/**
 * Accept input, modify and write it
 * Takes a stream and manipulates as buffer
 * @param  {string} input
 */
const tag = input => {
  const buffer = Buffer.from(input);
  let output;

  // Article wrappers
  const articleA = Buffer.from('<article>');
  const articleZ = Buffer.from('</article>');

  // h2 tags - section titles
  const h2A = Buffer.from('<h2>');
  const h2Z = Buffer.from('</h2>');

  // h3 tags - numbered sections
  const h3A = Buffer.from('<h3>');
  const h3Z = Buffer.from('</h3>');

  // ul - paragraphs
  const ulA = Buffer.from('<ul>');
  const ulZ = Buffer.from('</ul>');

  // li - sentences
  const liA = Buffer.from('<li>');
  const liZ = Buffer.from('</li>');

  // incidentals
  const sp = Buffer.from(' ');
  const pd = Buffer.from('.');

  if (buffer.includes('6 Reasons for Pair Programming')) {
    output = `${articleA}${h2A}${buffer}${h2Z}`;
    write(output);
  } else if (buffer.includes('one less hurdle to overcome.')) {
    output = `${buffer}${liZ}${ulZ}${articleZ}`;
    append(output);
  } else if (
    buffer.includes('Wow, all that? Let’s take a look!') ||
    buffer.includes('Why pair program?') ||
    buffer.includes('How does pair programming work?')
  ) {
    output = `${h2A}${buffer}${h2Z}`;
    append(output);
  } else if (/^\d.*/g.test(buffer)) {
    output = `${h3A}${buffer}${h3Z}`;
    append(output);
  } else {
    let paragraph = input.split(`${pd}${sp}`);
    paragraph = paragraph.join(`${pd}${liZ}${liA}`);
    output = `${ulA}${liA}${paragraph}${liZ}${ulZ}`;
    append(output);
  }
};

// Read the stream line by line
// and tag the data that comes through
rl.on('line', data => {
  tag(data);
});

module.exports = exports = { write, append, tag };
