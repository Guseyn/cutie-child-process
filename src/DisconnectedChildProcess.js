'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is childProcess
class DisconnectedChildProcess extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  syncCall () {
    return (childProcess) => {
      childProcess.disconnect()
      return childProcess
    }
  }
}

module.exports = DisconnectedChildProcess
