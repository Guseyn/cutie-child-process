'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object | undefined
class Channel extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.channel;
    }
  }

}

module.exports = Channel;
