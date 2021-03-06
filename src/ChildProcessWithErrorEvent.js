'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is childProcess
class ChildProcessWithErrorEvent extends AsyncObject {
  // event is an Event with body(error)
  constructor (childProcess, event) {
    super(childProcess, event)
  }

  syncCall () {
    return (childProcess, event) => {
      childProcess.on('error', event)
      return childProcess
    }
  }
}

module.exports = ChildProcessWithErrorEvent
