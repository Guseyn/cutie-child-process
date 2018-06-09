'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsConnected extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.connected;
    }
  }

}

module.exports = IsConnected;
