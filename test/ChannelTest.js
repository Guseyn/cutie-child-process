'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsUndefined
} = require('@guseyn/cutie-is');
const {
  Channel,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new IsUndefined(
    new Channel(
      new Executed('ls', lsCallback).as('cp')
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
