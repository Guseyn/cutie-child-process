'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
