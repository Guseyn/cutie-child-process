'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsKilled extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.killed;
    }
  }

}

module.exports = IsKilled;
