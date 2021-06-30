"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resError = exports.resSuccess = void 0;
const resSuccess = (body) => {
    const { ctx, msg = "请求成功", result = null } = body;
    ctx.body = { code: 200, msg, result };
};
exports.resSuccess = resSuccess;
const resError = (body) => {
    const { ctx, msg = "请求失败", code = 500 } = body;
    ctx.body = { code, msg };
};
exports.resError = resError;
//# sourceMappingURL=httpUtils.js.map