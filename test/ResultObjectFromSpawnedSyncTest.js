'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ResultObjectFromSpawnedSync
} = require('./../index');

new Assertion(
  new IsObject(
    new ResultObjectFromSpawnedSync(
      'ls'
    )
  )
).call();
