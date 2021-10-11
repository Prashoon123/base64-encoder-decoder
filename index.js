const base64Pkg = require("base-64");
const utf8 = require("utf8");

const base64 = {
  encode: (string) => {
    const bytes = utf8.encode(string);

    return base64Pkg.encode(bytes);
  },
  decode: (string) => {
    const bytes = base64Pkg.decode(string);

    return utf8.decode(bytes);
  },
};

module.exports = base64;
