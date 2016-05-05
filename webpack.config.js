var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/static/js',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],
    resolve: {
        modulesDirectories: [__dirname + '/node_modules'],
        root: __dirname + '/app'
    },
    resolveLoader: {
        root: __dirname + '/node_modules'
    }
};