import { ParameterizedContext } from "koa";
import { resSuccess } from "../httpUtils";
import MenuService from "../service/MenuService";

const service = new MenuService();

class MenusController {
  constructor() {}
  static addMenu = async (ctx: ParameterizedContext) => {
    const reqBody = ctx.request.body;
    if (!reqBody) {
      ctx.throw(400, "缺少必要参数");
    }
    const { resultStatus, result } = await service.createMenu(ctx);
    if (!resultStatus) {
      ctx.throw(500, "创建菜单失败");
    }
    const resBody = { ctx, result };
    resSuccess(resBody);
  };
}

export default MenusController;
