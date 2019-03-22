![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - File Transformers

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-04)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04)

#### Documentation
* [jsdoc](./docs/)

### Modules
#### `index.js`
##### Exported Values and Methods
###### `convert(string) -> Buffer` -> content for `./files/loop.js`
1. This function takes a string of ASCII-encoded characters and converts them into a buffer.

2. Using the buffer, this function creates `./files/loop.js` if that file does not exist. A short `.forEach()` loop is written to the file.

If `loop.js` is run with the `node` command, it logs three names.

It was attempted to break the `convert` function into separate `convert` and a `writeLoop` functions, but this was found to be a breaking change.

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
    * `loop.js` can be run with `node ./files/loop.js`

* `node web-formatter.js`
  * Outputs `article.html` to `./`
  
#### Tests
* How do you run tests?

`npm run lint`

`npm run test`

`npm run watch`
* What assertions were made?
  * Only dummy assertions have been made.
* What assertions need to be / should be made?
  * The modules require a full range of tests. 
  * For `convert`, tests might include ensuring error handling for invalid arguments or if the `./files` folder does not exist in the correct path.
  * `write` and `append` functions require only proof of life testing because they are wrappers around `fs` built-in methods, but with a hardcoded `path` and `callback` arguments.
  * `tag` accomplishes the goals of the Lab, but it probably uses the wrong method to do so because it manipulates its input as strings rather than as buffers, despite the fact that its input, in practice, is a line-by-line stream from a file. If desired, However, a series of tests might be made to test the internal RegEx and other string manipulation techniques.

#### UML
N/A
