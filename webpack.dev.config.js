var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://localhost:3001', 'webpack/hot/dev-server', "./develop/index"],
        plugins: ['react']
    },

    output: {
        path: path.join(__dirname, "/develop/"),
        publicPath: 'http://localhost:3001/develop/',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('plugins', 'plugins.bundle.js')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {

        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version', 'sass']},
            { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
            { test: /\.json/, loaders: ['json']}
        ]
    }
};