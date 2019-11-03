const path = require("path");
const htmlWebPackPlug = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["@babel/polyfill", "react", "react-dom"],
    client: "./index.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].chunkhash.bundle.js",
    chunkFilename: "[name].chunkhash.bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new htmlWebPackPlug({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};
