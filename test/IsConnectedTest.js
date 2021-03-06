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
  Forked,
  IsConnected,
  KilledChildProcess
} = require('./../index')

new Assertion(
  new IsConnected(
    new Forked('./src/Forked.js').as('cp'),
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call()
