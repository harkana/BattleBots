module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  outputDir: __dirname + "/../API/src/public/App",
  publicPath: process.env.BASE_URL
  // publicPath: process.env.VUE_APP_PUBLIC // "public/App" the Vue App dist directory in the render API
}