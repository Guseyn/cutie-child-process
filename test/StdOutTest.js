'use strict'

const {
  Readable
} = require('stream')
const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  Executed,
  StdOut,
  KilledChildProcess
} = require('./../index')

let lsCallback = (/* error, stdout, stderr */) => {
  // do smth
}

new Assertion(
  new Is(
    new StdOut(
      new Executed('ls', lsCallback).as('cp')
    ), Readable
  )
).after(
  new KilledChildProcess(as('cp'))
).call()
