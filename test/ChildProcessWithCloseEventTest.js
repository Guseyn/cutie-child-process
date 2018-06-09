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
  ChildProcessWithCloseEvent,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(code, signal) {
    // handle
  }

} 

new Assertion(
  new Is(
    new ChildProcessWithCloseEvent(
      new Executed('ls', lsCallback).as('cp'), new CloseEvent()
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
