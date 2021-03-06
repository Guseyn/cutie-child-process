'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream
class StdOut extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  syncCall () {
    return (childProcess) => {
      return childProcess.stdout
    }
  }
}

module.exports = StdOut
