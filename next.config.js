const withAntdLess = require("next-plugin-antd-less");
const withReactSvg = require("next-react-svg");
const { withPlugins } = require("next-compose-plugins");
const path = require("path");

const plugins = [
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, "svg"),
    },
  ],
  [
    withAntdLess,
    {
      modifyVars: { "@primary-color": "#25A1B1;", "@font-family": "Inter" }, // optional
      cssLoaderOptions: {
        mode: "local",
      },
      // for Next.js ONLY
      nextjs: {
        localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
      },
    },
  ],
];

const nextConfig = withPlugins(plugins, {});

module.exports = nextConfig;
