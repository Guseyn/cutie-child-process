'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is childProcess
class ChildProcessWithCloseEvent extends AsyncObject {
  constructor (childProcess, event) {
    super(childProcess, event)
  }

  // event is an Event with body(code, signal)
  syncCall () {
    return (childProcess, event) => {
      childProcess.on('close', event)
      return childProcess
    }
  }
}

module.exports = ChildProcessWithCloseEvent
