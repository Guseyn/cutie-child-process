'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const { spawnSync } = require('child_process');

// Represented result is object
class ResultObjectFromSpawnedSync extends AsyncObject {

  //...args are args and options
  constructor(command, ...args) {
    super(command, ...args);
  }

  definedSyncCall() {
    return spawnSync;
  }

}

module.exports = ResultObjectFromSpawnedSync;
