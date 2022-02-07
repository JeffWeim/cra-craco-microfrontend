const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
require("dotenv").config();

const outputDevConfig = {
  publicPath: process.env.PUBLIC_PATH,
};

const outputProdConfig = {
  filename: "[name].[contenthash].js",
  publicPath: `https://cra-craco-microfrontend-app2.vercel.app/`,
};

module.exports = function ({ env }) {
  return {
    devServer: {
      port: 8082,
      historyApiFallback: {
        index: "/index.html",
      },
    },
    webpack: {
      configure: {
        output: env === "development" ? outputDevConfig : outputProdConfig,
        plugins: [
          new ModuleFederation({
            name: "app2",
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
