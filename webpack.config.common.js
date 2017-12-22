var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
              }
            },
             {
                test: /\.(otf|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/[name].[ext]'
            }

        ],
        exprContextCritical: false

    }
};