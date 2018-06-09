'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream
class StdOut extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.stdout;
    }
  }

}

module.exports = StdOut;
