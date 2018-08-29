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
  ChildProcessWithMessageEvent,
  Executed,
  KilledChildProcess
} = require('./../index');

let lsCallback = (error, stdout, stderr) => {
  // do smth
}

class MessageEvent extends Event {

  constructor() {
    super();
  }

  definedBody(message) {
    // handle
  }

} 

new Assertion(
  new Is(
    new ChildProcessWithMessageEvent(
      new Executed('ls', lsCallback).as('cp'), new MessageEvent()
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();
