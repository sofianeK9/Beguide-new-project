const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    popup: "./src/index.js",
    // background: "./src/background.jsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Appliquez cette règle aux fichiers .css
        include: path.resolve(__dirname, 'src/components'),
        use: ['style-loader', 'css-loader'], // Utilisez ces loaders dans cet ordre
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public"},
        { from: "src/components", to: "components" },
      ],
    }),
  ],
};