const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals')

// eslint-disable-next-line import/no-extraneous-dependencies
const { VueLoaderPlugin } = require('vue-loader')
// eslint-disable-next-line import/no-extraneous-dependencies
const global = require('glob')

const componentsList = {}

async function makeList(dirPath, list) {
  const files = global.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    // eslint-disable-next-line no-param-reassign
    list[component] = `./${file}`
  }
}
makeList('packages/components', componentsList)

module.exports = {
  entry: componentsList,
  mode: 'development',
  output: {
    filename: '[name].umd.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist'), // 输出文件存放目录
    library: 'amberui', // 库名称
    libraryTarget: 'umd', // 以何种方式导出库
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  plugins: [new VueLoaderPlugin()], // 引入插件
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  externals: [nodeExternals()]
}
