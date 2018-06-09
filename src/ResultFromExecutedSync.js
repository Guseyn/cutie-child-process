'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const { execSync } = require('child_process');

// Represented result is buffer | string
class StdOutFromExecutedSync extends AsyncObject {

  //...args are args and options
  constructor(command, ...args) {
    super(command, ...args);
  }

  definedSyncCall() {
    return execSync;
  }

}

module.exports = StdOutFromExecutedSync;
