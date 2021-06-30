"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const MenusController_1 = require("./controller/MenusController");
const router = new Router();
router.get("/", MenusController_1.default.addMenu);
exports.default = router;
//# sourceMappingURL=route.js.map