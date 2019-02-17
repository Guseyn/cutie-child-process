'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  Pid,
  Executed,
  KilledChildProcess
} = require('./../index')

let lsCallback = (/* error, stdout, stderr */) => {
  // do smth
}

new Assertion(
  new IsNumber(
    new Pid(
      new Executed('ls', lsCallback).as('cp')
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call()
