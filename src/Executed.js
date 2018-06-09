'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const { exec } = require('child_process');

// Represented result is childProcess
class Executed extends AsyncObject {

  //...args are options and callback
  constructor(command, ...args) {
    super(command, ...args);
  }

  definedSyncCall() {
    return exec;
  }

}

module.exports = Executed;
