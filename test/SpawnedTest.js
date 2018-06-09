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
  Spawned,
  KilledChildProcess
} = require('./../index');

new Assertion(
  new Is(
    new Spawned('ls').as('cp'), 
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
