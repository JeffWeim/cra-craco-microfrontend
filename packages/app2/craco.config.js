const { whenDev } = require("@craco/craco");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
require("dotenv").config();

const pkgJson = require("./package.json");
const appName = pkgJson.name;

const port = 8082;
const deps = pkgJson.dependencies;

const devServerConfig = {
  port,
  historyApiFallback: {
    index: "/index.html",
  },
};

const outputDevConfig = {
  publicPath: process.env.PUBLIC_PATH,
};

const outputProdConfig = {
  filename: "[name].[contenthash].js",
  publicPath: `https://cra-craco-microfrontend-app2.vercel.app/`,
};

module.exports = function ({ env }) {
  return {
    devServer: whenDev(() => devServerConfig, []),
    webpack: {
      configure: {
        output: env === "development" ? outputDevConfig : outputProdConfig,
        plugins: [
          new ModuleFederation({
            name: appName,
            filename: "remoteEntry.js",
            exposes: {
              "./App2": "./src/bootstrap", // this works
              // "./App2": "./src/app2", // this also works
            },
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps["react"],
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
          }),
        ],
      },
    },
  };
};
