var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: ["./source/index"],
        plugins: ['react', 'react-dom']
    },

    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('plugins', 'plugins.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
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