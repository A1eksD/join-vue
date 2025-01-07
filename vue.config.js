// vue.config.js
module.exports = {
  configureWebpack: {
    devtool: 'source-map', // Nur für JavaScript-Quellmaps, falls benötigt
  },
  css: {
    extract: false, // CSS wird nicht extrahiert
    sourceMap: false, // Keine Source Maps für CSS
  },
  devServer: {
    hot: false, // Deaktiviert Hot Module Replacement (HMR)
  },
};
