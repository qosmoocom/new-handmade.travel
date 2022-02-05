const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimization: {
    minimize: false,
  },
  images: {
    domains: [
      "images.pexels.com",
      "pexels.com",
      "www.pexels.com",
      "www.images.pexels.com",
    ],
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
