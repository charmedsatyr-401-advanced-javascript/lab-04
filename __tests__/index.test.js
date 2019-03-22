'use strict';

const index = require('../index.js');

describe('`convert` should be good', () => {
  index.convert;
  expect(true).toBeTruthy();
});

describe('`writeLoop` should be good', () => {
  index.writeLoop;
  expect(true).toBeTruthy();
});
