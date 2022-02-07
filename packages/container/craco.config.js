const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const outputDevConfig = {
  publicPath: process.env.PUBLIC_PATH,
};

const outputProdConfig = {
  filename: "[name].[contenthash].js",
  publicPath: `https://cra-craco-microfrontend-container.vercel.app/`,
};

module.exports = function ({ env }) {
  return {
    devServer: {
      port: 8080,
      historyApiFallback: {
        index: "/index.html",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
    },
    webpack: {
      configure: {
        output: env === "development" ? outputDevConfig : outputProdConfig,
        plugins: [
          new ModuleFederation({
            name: "container",
            remotes: {
              app1:
                env === "development"
                  ? "app1@http://localhost:8081/remoteEntry.js"
                  : "app1@https://cra-craco-microfrontend-app1.vercel.app/remoteEntry.js",
              app2:
                env === "development"
                  ? "app2@http://localhost:8082/remoteEntry.js"
                  : "app2@https://cra-craco-microfrontend-app2.vercel.app/remoteEntry.js",
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
