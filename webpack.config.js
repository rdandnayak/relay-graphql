module.exports = {
  entry: './src/js/app.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-0'] }
      }
    ]
  }
};
