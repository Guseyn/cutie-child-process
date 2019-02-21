'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  ChildProcess
} = require('child_process')
const {
  Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  ChildProcessWithErrorEvent,
  Executed,
  KilledChildProcess
} = require('./../index')

let lsCallback = (/* error, stdout, stderr */) => {
  // do smth
}

class ErrorEvent extends Event {
  constructor () {
    super()
  }

  body (/* error */) {
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
).call()
