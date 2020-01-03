module.exports = {
  //diz qual é o nosso arquivo principal;
  entry:'./main.js',
  output:{
    path: __dirname,
    filename:'bundle.js',
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader',
        }
      }
    ],
  },
};