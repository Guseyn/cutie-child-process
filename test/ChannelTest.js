'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsUndefined
} = require('@cuties/is')
const {
  Channel,
  Executed,
  KilledChildProcess
} = require('./../index')

let lsCallback = (/* error, stdout, stderr */) => {
  // do smth
}

new Assertion(
  new IsUndefined(
    new Channel(
      new Executed('ls', lsCallback).as('cp')
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call()
