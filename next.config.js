const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");

module.exports = withPlugins([
  withTypescript,
  withCSS(
    withSass({
      webpack(config) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        });

        return config;
      },
      env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      },
    })
  ),
]);
