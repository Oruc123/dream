const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["myMixins"] = path.resolve(
      __dirname,
      "app/styled/mixins.ts"
    );
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "app/components/"
    );
    config.resolve.alias["styled"] = path.resolve(__dirname, "app/styled/");
    return config;
  },
};
