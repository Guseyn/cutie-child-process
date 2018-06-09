'use strict'

const {
  Readable
} = require('stream');
const {
  as
} = require('@guseyn/cutie');
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
  StdIn,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new Is(
    new StdIn(
      new Executed('ls', lsCallback).as('cp')
    ), Readable
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
