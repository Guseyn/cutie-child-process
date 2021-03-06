'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const { execSync } = require('child_process')

// Represented result is buffer | string
class StdOutFromExecutedSync extends AsyncObject {
  // ...args are args and options
  constructor (command, ...args) {
    super(command, ...args)
  }

  syncCall () {
    return execSync
  }
}

module.exports = StdOutFromExecutedSync
