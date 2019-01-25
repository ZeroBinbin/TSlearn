var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
// Step 1: 引入 webpack 的配置文件和 生成 webpack 的编译器
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
// Step 2: 将编译器挂载给 webpack dev middleware
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

// Step 3: 将编译器挂载给 webpack hot middleware
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 1000,overlay:false,
}));

app.use(express.static(path.resolve(__dirname, './publish')));
app.use(express.static(path.resolve(__dirname, './chunk')));

app.get('*', function (req, res) {
    fs.createReadStream(path.resolve(__dirname, './index.html')).pipe(res);
});


app.listen(3009, () => console.log('Example app listening on port 3009!'))