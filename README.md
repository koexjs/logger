# koa-logger

[![NPM version](https://img.shields.io/npm/v/@zcorky/koa-logger.svg?style=flat)](https://www.npmjs.com/package/@zcorky/koa-logger)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/koa-logger.svg?style=flat)](https://coveralls.io/r/zcorky/koa-logger)
[![Dependencies](https://david-dm.org/@zcorky/koa-logger/status.svg)](https://david-dm.org/@zcorky/koa-logger)
[![Build Status](https://travis-ci.com/zcorky/koa-logger.svg?branch=master)](https://travis-ci.com/zcorky/koa-logger)
![license](https://img.shields.io/github/license/zcorky/koa-logger.svg)
[![issues](https://img.shields.io/github/issues/zcorky/koa-logger.svg)](https://github.com/zcorky/koa-logger/issues)

> Deep Diff & Patch in js, maybe data visition timeline json data is common for use.
> Diff => CREATE / UPDATE / DELETE / UNCHANGE Data.
> Patch => Immutable Philosophy Data.

### Install

```
$ npm install @zcorky/koa-logger
```

### Usage

```javascript
// See more in test
import logger from '@zcorky/koa-logger';

import * as Koa from 'koa';
const app = new Koa();
app.use(logger());
app.use(async (ctx) => {
  if (ctx.path === '/') {
    ctx.body = 'hello, world';
  } else if (ctx.path === '/json') {
    ctx.body = {
      name: 'name',
      value: 'value',
    };
  }
});

app.listen(8000, '0.0.0.0', () => {
  console.log('koa server start');
});
```

### Related
* [winston](https://github.com/winstonjs/winston)
* [rsshub/logger](https://github.com/DIYgod/RSSHub/blob/master/utils/logger.js)