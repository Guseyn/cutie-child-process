'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream
class StdErr extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.stderr;
    }
  }

}

module.exports = StdErr;
