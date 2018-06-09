'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is childProcess
class ChildProcessWithErrorEvent extends AsyncObject {

  // event is an Event with definedBody(error)
  constructor(childProcess, event) {
    super(childProcess, event);
  }

  definedSyncCall() {
    return (childProcess, event) => {
      childProcess.on('error', event);
      return childProcess;
    }
  }

}

module.exports = ChildProcessWithErrorEvent;
