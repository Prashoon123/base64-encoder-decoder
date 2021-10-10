import { base64 } from "./index.d";
const base64Pkg = require("base-64");
const utf8 = require("utf8");

export const base64: object = {
  encode: (string: string) => {
    const bytes: string = utf8.encode(string);
    const encodedString: base64 = base64Pkg.encode(bytes);

    return encodedString;
  },
  decode: (string: base64) => {
    const bytes: base64 = base64Pkg.encode(string);
    const decodedString: string = utf8.decode(bytes);

    return decodedString;
  },
};
