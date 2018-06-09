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
  ChildProcessWithDisconnectEvent,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

class DisconnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

} 

new Assertion(
  new Is(
    new ChildProcessWithDisconnectEvent(
      new Executed('ls', lsCallback).as('cp'), new DisconnectEvent()
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
