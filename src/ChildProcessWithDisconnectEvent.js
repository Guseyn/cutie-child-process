'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is childProcess
class ChildProcessWithDisconnectEvent extends AsyncObject {

  // event is an Event with definedBody()
  constructor(childProcess, event) {
    super(childProcess, event);
  }

  definedSyncCall() {
    return (childProcess, event) => {
      childProcess.on('disconnect', event);
      return childProcess;
    }
  }

}

module.exports = ChildProcessWithDisconnectEvent;
