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
  ChildProcessWithErrorEvent,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

class ErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

} 

new Assertion(
  new Is(
    new ChildProcessWithErrorEvent(
      new Executed('ls', lsCallback).as('cp'), new ErrorEvent()
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
