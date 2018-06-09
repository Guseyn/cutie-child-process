'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  Forked,
  IsConnected,
  KilledChildProcess
} = require('./../index');

new Assertion(
  new IsConnected(
    new Forked('./src/Forked.js').as('cp'), 
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
