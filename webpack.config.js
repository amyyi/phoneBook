module.exports = {

 // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
     entry: [
          './dist/js/main.js',
     ],

  // output 是放入產生出來的結果的相關參數
     output: {
         filename: 'bundle.js'
     },
     module: {

       // loaders則是放欲使用的loaders。另外，若使用 babel-loader並已經單獨使用 .babelrc 作為 presets 設定，則可省略 query
       // npm install babel-loader babel-core babel-preset-env babel-preset-es2015
      rules: [
        {
            test: /\.js$/, // RegExp形式
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                  presets: ['es2015', 'stage-0', 'react']
            }
        },
      ]
    },

// devServer 則是 webpack-dev-server 設定
     devServer: {
          inline: true,
          port: 3000,
     },

  // plugins 放置所使用的外掛
  plugins: [],
}