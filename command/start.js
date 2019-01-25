var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var cp = require('child_process');
webpack(webpackConfig).run((err, stats) => {
    console.log(err)
    if(err) {
        return;
    }
    cp.spawnSync('node', ['../server.js']);
});