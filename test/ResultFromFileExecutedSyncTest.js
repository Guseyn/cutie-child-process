'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
