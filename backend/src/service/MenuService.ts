import { ParameterizedContext } from "koa";
import { toJSONPreHook } from "../hook";
import Menu, { menusSchema } from "../schema/menus";

class MenuService {
  createMenu = async (ctx: ParameterizedContext): Promise<any> => {
    const reqBody = ctx.request.body;
    let formatResult = null;
    let resultStatus = false;
    if (Array.isArray(reqBody)) {
      const result = await Menu.insertMany(reqBody);
      formatResult = toJSONPreHook(menusSchema, result);
    } else {
      const result = await Menu.create(reqBody);
      formatResult = toJSONPreHook(menusSchema, result);
    }
    return { resultStatus, formatResult };
  };
  queryAllMenu = async () => {};
}

export default MenuService;
