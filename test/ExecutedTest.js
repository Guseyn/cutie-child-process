'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Event
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new Is(
    new Executed('ls', lsCallback).as('cp'),
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
