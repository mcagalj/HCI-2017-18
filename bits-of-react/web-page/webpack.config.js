const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

const CONFIG = {
    title: 'Human Computer Interaction',
    template: path.resolve(__dirname, 'src', 'index.html'),
    stylesPath: 'css',
    scriptsPath: 'js',
    bundleName: 'index'
};
const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader'];
const cssProduction = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
});
const cssConfig = isProduction ? cssProduction : cssDev;


const getOutput = () => {
    let output = {
        path: path.resolve(__dirname, 'public')
    }
    
    if (isProduction) return ({
        ...output, 
        filename: path.join(CONFIG.scriptsPath, '[name].[chunkhash:8].js')
    })

    return ({
        ...output,
        filename: '[name].js'
    })
}

const getPlugins = () => {
    let plugins = [
        // Automatically generates index.html with all scripts included.
        new HtmlWebpackPlugin({ 
            title: CONFIG.title,
            template: CONFIG.template
        })        
    ]
    
    if (isProduction) return [...plugins,
            new ExtractTextPlugin({
                filename: path.join(CONFIG.stylesPath, `${CONFIG.bundleName}.[chunkhash:8].css`)
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } }
            }),            
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'runtime'],
                minChunks: Infinity
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
              }), 
            new webpack.optimize.UglifyJsPlugin(),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
              })]

    return [...plugins,
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()]
}


module.exports = {
    context: __dirname,
    
    entry: {
        vendor: ['react', 'react-dom'],        
        [CONFIG.bundleName]: './src/index.js'
    },

    output: getOutput(),

    resolve: {
        modules: [
            path.join(__dirname, 'src'), 
            'node_modules'
        ]
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react'],
                    plugins: [
                        'transform-object-rest-spread', 
                        'transform-class-properties',
                        'transform-runtime'
                        // Enables dynamic loading of modules;
                        // useful for progressive web apps. 
                        // 'syntax-dynamic-import' 
                    ]
                },

            },
            {   
                test: /\.(css)$/,                
                use: cssConfig
            }            
        ]
    },

    plugins: getPlugins(),

    devtool: isProduction ? false : 'source-map',

    target: 'web',
    
    devServer: {
        hot: true, // We're using Hot Module Replacement
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        stats: 'minimal',
        port: 3000
    }    
};