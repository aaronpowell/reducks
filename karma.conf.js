var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'tests/**/*.spec.js'
        ],

        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap'],
            'tests/**/*.js': ['webpack', 'sourcemap']
        },

        reporters: ['spec'],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader'
                }]
            },
            plugins: [
                new webpack.DefinePlugin({
                    '__DEV__': true,
                    'process.env': {
                        'NODE_ENV': JSON.stringify('development')
                    }
                })
            ]
        },

        webpackServer: {
            noInfo: true
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
