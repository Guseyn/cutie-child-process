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
  ChildProcessWithExitEvent,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

class ExitEvent extends Event {

  constructor() {
    super();
  }

  definedBody(code, signal) {
    // handle
  }

} 

new Assertion(
  new Is(
    new ChildProcessWithExitEvent(
      new Executed('ls', lsCallback).as('cp'), new ExitEvent()
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
