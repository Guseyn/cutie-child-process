'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const { execFile } = require('child_process');

// Represented result is childProcess
class FileExecuted extends AsyncObject {

  //...args are args, options and callback
  constructor(file, ...args) {
    super(file, ...args);
  }

  definedSyncCall() {
    return execFile;
  }

}

module.exports = FileExecuted;
