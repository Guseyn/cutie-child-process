'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const { fork } = require('child_process');

// Represented result is childProcess
class Forked extends AsyncObject {

  //...args are args and options
  constructor(modulePath, ...args) {
    super(modulePath, ...args);
  }

  definedSyncCall() {
    return fork;
  }

}

module.exports = Forked;
