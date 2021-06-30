import * as Router from "koa-router";
import MenusController from "./controller/MenusController";

const router = new Router();

router.post("/", async (ctx) => {
  await MenusController.addMenu(ctx);
});

export default router;
