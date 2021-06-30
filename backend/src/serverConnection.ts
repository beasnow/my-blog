import * as mongoose from "mongoose";

/**
 * 踩坑点: 1.确认是否在运行mongodb时，有设置账户和密码，如果设置了，uri 需要修改为:
 * mongodb://username:password@ip:port/db_name
 */
const DB_URI = "mongodb://192.168.0.90:27017/admin-blog";
// 连接数据库
const serverConnect = () => {
  mongoose.connect(DB_URI, (err: mongoose.NativeError) => {
    if (!err) {
      return console.log("数据库连接成功!");
    } else {
      return console.log("数据库连接失败!");
    }
  });
  return mongoose;
};

export default serverConnect;
