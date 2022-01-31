const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimization: {
    minimize: false,
  },
  compress: true,
  apps: [
    {
      name: "app",
      script: "server/index.js",
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
