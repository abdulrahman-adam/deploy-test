const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = (env) => {

  const buildFolderName = 'public';
  const proxyPath = `http://localhost:3001`;


  return {
    entry: "./src/index.jsx",
    resolve:{
      extensions: ['.tsx', '.js', '.ts', '.jsx', ],
    },
    output: {
      filename: "bundle.[fullhash].js",
      path: path.resolve(__dirname, "..", "server", "src", buildFolderName),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
        proxy: {
          '/api': {
               target: 'http://localhost:3000',
               router: () => proxyPath,
               logLevel: 'debug' /*optional*/
          }
        }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.png|svg|jpg|jpeg|gif|ico$/,
          use: ["file-loader"],
        },
      ],
    },
  }
  
};
