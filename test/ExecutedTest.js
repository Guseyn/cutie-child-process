'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  ChildProcess
} = require('child_process')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  Executed,
  KilledChildProcess
} = require('./../index')

let lsCallback = (/* error, stdout, stderr */) => {
  // do smth
}

new Assertion(
  new Is(
    new Executed('ls', lsCallback).as('cp'),
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call()
