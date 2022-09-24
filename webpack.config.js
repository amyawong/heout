module.exports = {
  // entry: {
  //   // entry: ["@babel/polyfill", "./client/index.js"],
  //   // entry: path.join(__dirname, "./client/index.js"),
  // },
  mode: "development",
  entry: ["./client/index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
