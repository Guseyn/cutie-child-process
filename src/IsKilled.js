'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsKilled extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  syncCall () {
    return (childProcess) => {
      return childProcess.killed
    }
  }
}

module.exports = IsKilled
