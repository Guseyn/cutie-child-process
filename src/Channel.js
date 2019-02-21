'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object | undefined
class Channel extends AsyncObject {
  constructor (childProcess) {
    super(childProcess)
  }

  syncCall () {
    return (childProcess) => {
      return childProcess.channel
    }
  }
}

module.exports = Channel
