'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is childProcess
class ChildProcessWithCloseEvent extends AsyncObject {

  constructor(childProcess, event) {
    super(childProcess, event);
  }

  // event is an Event with definedBody(code, signal)
  definedSyncCall() {
    return (childProcess, event) => {
      childProcess.on('close', event);
      return childProcess;
    }
  }

}

module.exports = ChildProcessWithCloseEvent;
