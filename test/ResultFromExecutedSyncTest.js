'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  ResultFromExecutedSync,
  KilledChildProcess,
  Pid
} = require('./../index');

new Assertion(
  new Is(
    new ResultFromExecutedSync(
      'ls'
    ), Buffer
  )
).call();
