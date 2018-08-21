# cutie-child-process

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>child-process</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-child-process/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-child-process');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>process</b> module.

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| Channel | childProcess.channel | childProcess | object\|undefined |
| ChildProcessWithCloseEvent | childProcess.on('close', event) | childProcess, event(Event with definedBody(code, signal)) | childProcess |
| ChildProcessWithDisconnectEvent | childProcess.on('disconnect', event) | childProcess, event(Event with definedBody()) | childProcess |
| ChildProcessWithErrorEvent | childProcess.on('error', event) | childProcess, event(Event with definedBody(error)) | childProcess |
| ChildProcessWithExitEvent | childProcess.on('exit', event) | childProcess, event(Event with definedBody(code, signal)) | childProcess |
| ChildProcessWithMessageEvent | childProcess.on('message', event) | childProcess, event(Event with definedBody(message, sendHandle)) | childProcess |
| Executed | exec | command[, options][, callback] | childProcess |
| FileExecuted | execFile | file[,args][, options][, callback] | childProcess |
| Forked | fork | modulePath[,args][, options] | childProcess |
|||||
|||||
|||||
|||||


[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-child-process.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-child-process
