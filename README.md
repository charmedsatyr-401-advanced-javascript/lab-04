![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - File Transformers

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-04)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04)

#### Documentation
* [jsdoc](./docs/) (All assignments)

### Modules
#### `index.js`
##### Exported Values and Methods
###### `convert(string) -> Buffer`
This function takes a string of ASCII-encoded characters and converts them into a buffer.

###### `writeLoop(buffer)` -> content for `./files/loop.js`
This function takes a buffer. It creates `./files/loop.js` if that file does not exist. A short .forEach() loop is written to the file.

If `loop.js` is run with the `node` command, it logs three names.

#### `web-formatter.js`
##### Exported Values and Methods
###### `write(data)` -> writes data to `./article.html`
This function will create `./article.html` if it does not already exist and will replace the file's existing contents if it does.

###### `append(data)` -> append data to `./article.html`

###### `tag(input)` -> `./article.html`
This function modifies the input argument and writes or appends it to `./article.html` using the `write` and `append` functions.

### Setup
#### `.env` requirements
* N/A

#### Running the app
* `node index.js`
  * Outputs `loop.js` to `./files/`
* `node web-formatter.js`
  * Outputs `article.html` to `./`
  
#### Tests
* How do you run tests?

`npm run lint`

`npm run test`

`npm run watch`
* What assertions were made?
  * Only dummy assertions have been made to this point.
* What assertions need to be / should be made?
  * TBD

#### UML
N/A