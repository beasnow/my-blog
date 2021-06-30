"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const menusSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    title: String,
    parent_id: String,
    icon: String,
});
const Menu = mongoose.model("menu", menusSchema);
exports.default = Menu;
//# sourceMappingURL=menus.js.map