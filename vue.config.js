const path = require("path");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.resolve(__dirname, './src/skeleton.js')
                    }
                },
                quiet: true,
                minimize: true,
                router: {
                    mode: 'hash',
                    routes: [{
                            path: '/',
                            skeletonId: 'skeleton1'
                        },
                        {
                            path: '/about',
                            skeletonId: 'skeleton2'
                        }
                    ]
                }
            })
        ]
    }
};