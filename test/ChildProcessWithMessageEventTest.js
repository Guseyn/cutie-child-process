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
