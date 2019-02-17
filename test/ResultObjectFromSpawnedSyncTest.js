'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ResultObjectFromSpawnedSync
} = require('./../index')

new Assertion(
  new IsObject(
    new ResultObjectFromSpawnedSync(
      'ls'
    )
  )
).call()
