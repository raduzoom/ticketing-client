
const Dotenv = require('dotenv-webpack');
// const { parsed: myEnv } = require('dotenv').config({
// })
// const webpack = require('webpack')
module.exports = {
  env:{
    STRIPE_KEY_PUBLIC: process.env.STRIPE_KEY_PUBLIC
  },
  future: {
    webpack5: true,
  },
  webpack5: true,
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    
    console.log('webpack', config);
    console.log('--- end webpack')
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    config.plugins.push(new Dotenv())
    // config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    // config.plugins =  [new Dotenv()];

    return config;
  },
  webpackDevMiddleware: (config) => {
    console.log('webpack middleware', config);
    if(config.resolve){
      config.resolve.fallback = { fs: false };
    }


    config.watchOptions.poll = 300;
    return config;
  },
};
