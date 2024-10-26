module.exports = function override(config, env) {
    const babelLoader = config.module.rules[0].oneOf.find(
      rule => rule.loader && rule.loader.includes('babel-loader')
    );
  
    if (babelLoader) {
      babelLoader.options.plugins.push('@babel/plugin-proposal-private-property-in-object');
    }
  
    return config;
  };
  