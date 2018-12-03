import * as winston from 'winston';
import { Context } from 'koa';
// import LRU, { LRU as ILRU } from '@zcorky/lru';
// import { undefined as isUndefined } from '@zcorky/is';

// const debug = require('debug')('koa-rate-limit');

declare module 'koa' {
  export interface Context {
    logger: winston.Logger;
  }
}
export interface Options {
  level?: string;
  transport?: 'console' | 'file';
  filename?: string;
}

export default (options: Options = {}) => {
  const level = options.level || 'info';
  const transport = options.transport || 'console';
  const filename = options.filename || `logs/${level}.log`;

  const logger = winston.createLogger({
    level,
    format: winston.format.json(),
    transports: transport !== 'console' ? [
      new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(), winston.format.json()),
      }),
    ] : [
      new winston.transports.File({
        filename,
      })
    ],
  });

  return async function koaLogger(ctx: Context, next: () => Promise<void>) {
    if (!ctx.logger) {
      ctx.logger = logger;
    }

    await next();
  };
};
