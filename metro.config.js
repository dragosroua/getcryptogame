/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const path = require('path');
 
 const extraNodeModules = {
  'crypto': path.resolve(__dirname + '/extra_modules/crypto'),
  stream: require.resolve('stream-browserify'),
};
 module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },

};

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      extraNodeModules
    },
    
     
  };
})();