'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  ResultFromFileExecutedSync,
  KilledChildProcess,
  Pid
} = require('./../index');

new Assertion(
  new Is(
    new ResultFromFileExecutedSync(
      'node', ['--version']
    ), Buffer
  )
).call();
