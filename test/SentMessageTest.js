'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  SentMessage,
  Forked,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

new Assertion(
  new IsString(
    new SentMessage(
      new Forked('./src/Forked.js').as('cp'),
      'message'
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
