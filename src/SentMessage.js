'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class SentMessage extends AsyncObject {
  constructor (childProcess, message, sendHandle, options) {
    super(childProcess, message, sendHandle, options)
  }

  definedAsyncCall () {
    return (childProcess, message, sendHandle, options, callback) => {
      this.message = message
      return childProcess.send(message, sendHandle, options, callback)
    }
  }

  onResult () {
    return this.message
  }
}

module.exports = SentMessage
