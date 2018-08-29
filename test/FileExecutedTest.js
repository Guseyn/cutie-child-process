'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
