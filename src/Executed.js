'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const { exec } = require('child_process')

// Represented result is childProcess
class Executed extends AsyncObject {
  // ...args are options and callback
  constructor (command, ...args) {
    super(command, ...args)
  }

  syncCall () {
    return exec
  }
}

module.exports = Executed
