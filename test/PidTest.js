'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Pid,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new IsNumber(
    new Pid(
      new Executed('ls', lsCallback).as('cp')
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
