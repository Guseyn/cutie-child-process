'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is childProcess
class ChildProcessWithExitEvent extends AsyncObject {

  constructor(childProcess, event) {
    super(childProcess, event);
  }

  // event is an Event with definedBody(code, signal)
  definedSyncCall() {
    return (childProcess, event) => {
      childProcess.on('exit', event);
      return childProcess;
    }
  }

}

module.exports = ChildProcessWithExitEvent;
