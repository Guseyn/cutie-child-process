'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  DisconnectedChildProcess,
  Forked,
  KilledChildProcess
} = require('./../index');

new Assertion(
  new Is(
    new DisconnectedChildProcess(
      new Forked('./src/DisconnectedChildProcess.js').as('cp')
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
