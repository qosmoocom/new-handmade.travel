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
      name: "okeey",
      script: "backend/server.js",
      watch: true,
      env: {
        PORT: 3012,
        // 3005
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3012,
        // 3005
        NODE_ENV: "production",
      },
    },
  ],
};
