'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const { spawn } = require('child_process');

// Represented result is childProcess
class Spawned extends AsyncObject {

  //...args are args and options
  constructor(command, ...args) {
    super(command, ...args);
  }

  definedSyncCall() {
    return spawn;
  }

}

module.exports = Spawned;
