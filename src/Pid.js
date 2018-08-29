'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class Pid extends AsyncObject {

  constructor(childProcess) {
    super(childProcess);
  }

  definedSyncCall() {
    return (childProcess) => {
      return childProcess.pid;
    }
  }

}

module.exports = Pid;
