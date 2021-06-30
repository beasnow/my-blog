import * as mongoose from "mongoose";

export const menusSchema = new mongoose.Schema({
  name: { type: String, require: [true, "缺少name"] },
  title: { type: String, require: [true, "缺少title"] },
  uuid: { type: String },
  parent_id: { type: String },
  icon: { type: String },
});

const Menu = mongoose.model("menu", menusSchema);

export default Menu;
