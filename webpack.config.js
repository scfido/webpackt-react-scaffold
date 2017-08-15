const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.common');

module.exports = function (env) {
    return Merge(CommonConfig, require(`./webpack.${env}.js`));
}
