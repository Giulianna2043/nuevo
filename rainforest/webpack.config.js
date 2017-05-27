var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    entry:'./src/index.js',
    output:{
        filename:'dist/js/bundle.js'

    },
    module:{
    rules:[
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'dist/index.html'
        })
    ]
}