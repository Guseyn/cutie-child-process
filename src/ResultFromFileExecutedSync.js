'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const { execFileSync } = require('child_process');

// Represented result is buffer | string
class StdOutFromFileExecutedSync extends AsyncObject {

  //...args are args and options
  constructor(file, ...args) {
    super(file, ...args);
  }

  definedSyncCall() {
    return execFileSync;
  }

}

module.exports = StdOutFromFileExecutedSync;
