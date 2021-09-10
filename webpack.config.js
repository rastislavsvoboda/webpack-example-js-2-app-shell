const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
    },
    extensions: [".vue", "..."],
  },

  devServer: {
    static: path.join(__dirname, "public"),
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["vue-style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      // },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    // new ModuleFederationPlugin({
    //   name: "app-shell",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     "module1": "module1@http://localhost:8081/remoteEntry.js"
    //   },
    //   exposes: {
    //   },
    //   shared: require("./package.json").dependencies,
    // }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
};
