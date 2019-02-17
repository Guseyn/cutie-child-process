# cutie-child-process

[![NPM Version](https://img.shields.io/npm/v/@cuties/child-process.svg)](https://npmjs.org/package/@cuties/child-process)
[![Build Status](https://travis-ci.org/Guseyn/cutie-child-process.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-child-process)
[![codecov](https://codecov.io/gh/Guseyn/cutie-child-process/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-child-process)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>child-process</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-child-process/tree/master/test).

## Install

`npm install @cuties/child-process`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/child-process');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>process</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Channel` | `childProcess.channel` | `childProcess` | `object\|undefined` |
| `ChildProcessWithCloseEvent` | `childProcess.on('close', event)` | `childProcess, event(Event with definedBody(code, signal))` | `childProcess` |
| `ChildProcessWithDisconnectEvent` | `childProcess.on('disconnect', event)` | `childProcess, event(Event with definedBody())` | `childProcess` |
| `ChildProcessWithErrorEvent` | `childProcess.on('error', event)` | `childProcess, event(Event with definedBody(error))` | `childProcess` |
| `ChildProcessWithExitEvent` | `childProcess.on('exit', event)` | `childProcess, event(Event with definedBody(code, signal))` | `childProcess` |
| `ChildProcessWithMessageEvent` | `childProcess.on('message', event)` | `childProcess, event(Event with definedBody(message, sendHandle))` | `childProcess` |
| `Executed` | `exec` | `command[, options][, callback]` | `childProcess` |
| `FileExecuted` | `execFile` | `file[,args][, options][, callback]` | `childProcess` |
| `Forked` | `fork` | `modulePath[,args][, options]` | `childProcess` |
| `IsConnected` | `childProcess.connected` | `childProcess` | `boolean` |
| `IsKilled` | `childProcess.killed` | `childProcess` | `boolean` |
| `KilledChildProcess` | `childProcess.kill` | `childProcess` | `childProcess` |
| `Pid` | `childProcess.pid` | `childProcess` | `number` |
| `ResultFromExecutedSync` | `execSync` | `command[,args][,options]` | `buffer\|string` |
| `ResultFromFileExecutedSync` | `execFileSync` | `file[,args][,options]` | `buffer\|string` |
| `ResultObjectFromSpawnedSync` | `spawnSync` | `command[,args][,options]` | `object` |
| `SentMessage` | `childProcess.send` | `childProcess, message, sendHandle, options` | `message` |
| `Spawned` | `spawn` | `command[,args][,options]` | `childProcess` |
| `StdErr` | `childProcess.stderr` | `childProcess` | `stream` |
| `StdIn` | `childProcess.stdin` | `childProcess` | `stream` |
| `StdOut` | `childProcess.stdout` | `childProcess` | `stream` |
