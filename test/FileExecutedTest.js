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
  FileExecuted,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new Is(
    new FileExecuted('node', ['--version'], lsCallback).as('cp'),
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
