"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const route_1 = require("./route");
const serverConnection_1 = require("./serverConnection");
const koaBody = require("koa-body");
const app = new Koa();
serverConnection_1.default();
// 搭配koa-body将请求体注入到ctx
app.use(koaBody({
    multipart: true,
}));
app.use(route_1.default.routes());
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
//# sourceMappingURL=app.js.map