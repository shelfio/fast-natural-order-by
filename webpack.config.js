const {resolve} = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
    path: resolve(__dirname, 'lib'),
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
