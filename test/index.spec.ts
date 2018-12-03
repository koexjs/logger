import * as Koa from 'koa';
import * as request from 'supertest';
import 'should';

import logger from '../src';

describe('ratelimit middleware', () => {
  it('should have logger', async () => {
    const app = new Koa();

    app.use(logger());

    app.use(ctx => {
      ctx.logger.should.not.null();
      ctx.body = 'hello, world';
    });

    await request(app.listen())
      .get('/')
      .expect(200, 'hello, world');
  });

  describe('should not define logger only once', () => {
    const app = new Koa();

    app.use(logger());

    app.use(ctx => {
      ctx.logger.should.not.null();
      ctx.logger.info('logger info log');
      ctx.body = 'hello, world';
    });

    const req = request(app.listen());

    it('should create logger with request', async () => {
      await req
        .get('/')
        .expect(200, 'hello, world');
    });

    it('should create logger with request', async () => {
      await req
        .get('/')
        .expect(200, 'hello, world');
    });
  });
});
