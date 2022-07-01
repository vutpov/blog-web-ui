const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
  modifyVars: { "@primary-color": "#25A1B1;", "@font-family": "Inter" }, // optional
  cssLoaderOptions: {
    mode: "local",
  },
  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },
});

module.exports = nextConfig;
