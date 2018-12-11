# logger

[![NPM version](https://img.shields.io/npm/v/@koex/logger.svg?style=flat)](https://www.npmjs.com/package/@koex/logger)
[![Coverage Status](https://img.shields.io/coveralls/koexjs/logger.svg?style=flat)](https://coveralls.io/r/koexjs/logger)
[![Dependencies](https://img.shields.io/david/koexjs/logger.svg)](https://github.com/koexjs/logger)
[![Build Status](https://travis-ci.com/koexjs/logger.svg?branch=master)](https://travis-ci.com/koexjs/logger)
![license](https://img.shields.io/github/license/koexjs/logger.svg)
[![issues](https://img.shields.io/github/issues/koexjs/logger.svg)](https://github.com/koexjs/logger/issues)

> logger for koa extend.

### Install

```
$ npm install @koex/logger
```

### Usage

```javascript
// See more in test
import logger from '@koex/logger';

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