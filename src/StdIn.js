'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream
class StdIn extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  definedSyncCall () {
    return (childProcess) => {
      return childProcess.stdin
    }
  }
}

module.exports = StdIn
