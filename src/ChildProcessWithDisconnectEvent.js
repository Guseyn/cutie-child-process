'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is childProcess
class ChildProcessWithDisconnectEvent extends AsyncObject {
  // event is an Event with body()
  constructor (childProcess, event) {
    super(childProcess, event)
  }

  syncCall () {
    return (childProcess, event) => {
      childProcess.on('disconnect', event)
      return childProcess
    }
  }
}

module.exports = ChildProcessWithDisconnectEvent
