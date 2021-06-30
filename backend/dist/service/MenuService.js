"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menus_1 = require("../schema/menus");
class MenuService {
    constructor() {
        this.createMenu = async (ctx) => {
            const reqBody = ctx.request.body;
            let result = null;
            let resultStatus = false;
            if (Array.isArray(reqBody)) {
                menus_1.default.insertMany(reqBody, {}, (err, doc) => {
                    if (!err) {
                        resultStatus = true;
                        result = doc;
                    }
                });
            }
            else {
                await menus_1.default.create([...reqBody], (err, doc) => {
                    if (!err) {
                        resultStatus = true;
                        result = doc;
                    }
                });
            }
            return { resultStatus, result };
        };
        this.queryAllMenu = async (ctx) => {
            const requestBody = ctx.request.body;
        };
    }
}
exports.default = MenuService;
//# sourceMappingURL=MenuService.js.map