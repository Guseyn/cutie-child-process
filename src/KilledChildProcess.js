'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is childProcess
class KilledChildProcess extends AsyncObject {
  constructor (childProcess, signal) {
    super(childProcess, signal)
  }

  syncCall () {
    return (childProcess, signal) => {
      childProcess.kill(signal)
      return childProcess
    }
  }
}

module.exports = KilledChildProcess
