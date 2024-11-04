// webpack.config.js

Module.exports = {
    // other webpack configurations...
    module: {
        rules: [
            // JavaScript/JSX rule (if not already configured)
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // CSS rule (if not already configured)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // Image rule
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // if file size is less than 8kB, convert to base64, else fallback to file-loader
                            name: '[name].[hash:8].[ext]', // output filename pattern
                            outputPath: 'assets/img', // output directory
                            publicPath: '/' // public URL address of the output directory
                        }
                    }
                ]
            }
        ]
    }
};
