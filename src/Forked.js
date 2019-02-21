'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const { fork } = require('child_process')

// Represented result is childProcess
class Forked extends AsyncObject {
  // ...args are args and options
  constructor (modulePath, ...args) {
    super(modulePath, ...args)
  }

  syncCall () {
    return fork
  }
}

module.exports = Forked
