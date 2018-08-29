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
