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
  Is
} = require('@guseyn/cutie-is');
const {
  Forked,
  KilledChildProcess
} = require('./../index');

new Assertion(
  new Is(
    new Forked('./src/Forked.js').as('cp'), 
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
