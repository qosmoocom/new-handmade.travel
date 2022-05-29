const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimization: {
    minimize: true,
  },
  compress: true,
  apps: [
    {
      name: "test",
      script: "backend/server.js",
      watch: true,
      env: {
        PORT: 3005,
        // 3005
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3005,
        // 3005
        NODE_ENV: "production",
      },
    },
  ],
};
