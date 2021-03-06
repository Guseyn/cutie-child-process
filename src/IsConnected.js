'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsConnected extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  syncCall () {
    return (childProcess) => {
      return childProcess.connected
    }
  }
}

module.exports = IsConnected
