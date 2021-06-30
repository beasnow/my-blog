import * as Koa from "koa";
import router from "./route";
import serverConnect from "./serverConnection";
import koaBody = require("koa-body");

const app = new Koa();

serverConnect();

// 搭配koa-body将请求体注入到ctx
app.use(
  koaBody({
    multipart: true,
  })
);

app.use(router.routes());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.listen(3030);
