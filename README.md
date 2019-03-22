![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - File Transformers

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-04) (Next time it will be a PR to a submission branch.)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-04)

#### Documentation
* [JSDoc](./docs/)

### Modules
#### `index.js`
##### Exported Values and Methods
With the hardcoded arguments, running `node index.js` will create `./files/loop.js` with a short `.forEach()` function inside.

If `node ./files/loop.js` is run, it will log three names.

###### `convert(string)` -> `Buffer`
This function takes a string of ASCII-encoded characters and converts them into a buffer.

###### `writeLoop(Buffer)` -> writes buffer data to `./files/loop.js`
Using the buffer, this function creates `./files/loop.js` if that file does not exist. The data is converted to a human-readable format and written to the file.


#### `pair-programming.js`
##### Exported Values and Methods
###### `write(data)` -> writes data to `./article.html`
This function will create `./article.html` if it does not already exist and will replace the file's existing contents if it does.

###### `append(data)` -> appends data to `./article.html`
This function will result in an error if `./article.html` does not exist.

###### `tag(input)` -> `./article.html`
This function converts the input into a buffer, modifies it per spec, and writes or appends it to `./article.html` using the `write` and `append` functions.

### Setup
#### `.env` requirements
* N/A

#### Running the app
* `node index.js`
  * Outputs `loop.js` to `./files/`
    * `loop.js` can be run with `node ./files/loop.js`

* `node pair-programming.js`
  * Outputs `article.html` to `./`
  
#### Tests
* How do you run tests?

`npm run lint`

`npm run test`

`npm run watch`
* What assertions were made?
  * Only dummy assertions have been made.
* What assertions need to be / should be made?
  * The modules lack meaningful formal tests. However, to some extent, the the proof is in the pudding: do the intended outputs result from running the module? They do on the tested system.
  * For `convert`, tests might include ensuring error handling for invalid arguments or if the `./files` folder does not exist in the correct path.
  * `write` and `append` functions require little more than proof of life testing because they are wrappers around `fs` built-in methods, but with a hardcoded `path` and `callback` arguments. More detailed testing of the Node.js modules might be done with mocks, but it's 3rd-party code.
  * `tag` manipulates the stream that is fed to it line-by-line from `./files/pair-programming.txt` by the `readline` package. If desired, a series of tests might be made to test that the manipulation is to spec, or to ensure that the `readline` initialization and methods are integrated properly.

#### UML
N/A
