import { map } from "lodash";
import { Document, Schema } from "mongoose";

//保存之后转为Json object
export const toJSONPreHook = (
  schema: Schema,
  doc: Document | Document[]
): any | any[] => {
  let jsonObj = null;
  schema.post("save", () => {
    if (Array.isArray(doc)) {
      jsonObj = map(doc, (i) => i.toJSON());
    } else {
      jsonObj = doc.toJSON();
    }
  });
  return jsonObj;
};
