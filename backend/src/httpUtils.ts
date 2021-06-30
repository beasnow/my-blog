export const resSuccess = (body: any) => {
  const { ctx, msg = "请求成功", result = null } = body;
  ctx.body = { code: 200, msg, result };
};
export const resError = (body: any) => {
  const { ctx, msg = "请求失败", code = 500 } = body;
  ctx.body = { code, msg };
};
