"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const httpUtils_1 = require("../httpUtils");
const MenuService_1 = require("../service/MenuService");
const service = new MenuService_1.default();
class MenusController {
    constructor() { }
}
MenusController.addMenu = async (ctx) => {
    const reqBody = ctx.request.body;
    if (lodash_1.isEmpty(reqBody)) {
        ctx.throw(400, "缺少必要参数");
    }
    const { resultStatus, result } = await service.createMenu(ctx);
    if (!resultStatus) {
        ctx.throw(500, "创建菜单失败");
    }
    const resBody = { ctx, result };
    httpUtils_1.resSuccess(resBody);
};
exports.default = MenusController;
//# sourceMappingURL=MenusController.js.map