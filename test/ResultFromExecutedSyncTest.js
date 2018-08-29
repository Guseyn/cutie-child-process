'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
