'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is childProcess
class ChildProcessWithMessageEvent extends AsyncObject {

  constructor(childProcess, event) {
    super(childProcess, event);
  }

  // event is an Event with definedBody(message, sendHandle)
  definedSyncCall() {
    return (childProcess, event) => {
      childProcess.on('message', event);
      return childProcess;
    }
  }

}

module.exports = ChildProcessWithMessageEvent;
