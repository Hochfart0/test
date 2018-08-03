module.exports = {
   /*  module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    
                })
            }
        ]
    }, */
    plugins: [
        require('autoprefixer')
    ]
};
