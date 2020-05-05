const path = require('path');

// your app's webpack.config.js
// const custom = require('../webpack.prod.js');

module.exports = {
    stories: ['../stories/*.stories.js'],
    addons: [
      // '@storybook/addon-knobs',
      'storybook-addon-xd-designs/register',
      'storybook-aem-style-system/register'
    ],
    webpackFinal: async (config, { configType }) => {
      // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
      // You can change the configuration based on that.
      // 'PRODUCTION' is used when building the static version of storybook.

      config.module.rules.push({
        test: /\.tsx?$/,
        exclude: [
            /(node_modules)/
        ],
        use: ['ts-loader', 'webpack-import-glob-loader'],
        include: path.resolve(__dirname, '../'),
      });
      config.module.rules.push({
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, '../'),
        exclude: [
          /node_modules/,
          /stories/
        ]
      });
      config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'webpack-import-glob-loader'],
        include: path.resolve(__dirname, '../'),
      });

      // Return the altered config
      return config;
    },
};