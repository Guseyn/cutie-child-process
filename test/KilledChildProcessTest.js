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
  Forked,
  IsConnected,
  KilledChildProcess
} = require('./../index')

new Assertion(
  new IsConnected(
    new Forked('./src/Forked.js').as('cp')
  )
).after(
  new Assertion(
    new Is(
      new KilledChildProcess(as('cp')),
      ChildProcess
    )
  )
).call()
