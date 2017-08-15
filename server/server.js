"use strict"

let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let url = require("url");
let webpack = require("webpack");
let webpackDevMiddleware = require("webpack-dev-middleware");
let webpackHotMiddleware = require("webpack-hot-middleware");
let config = require('../webpack.config');

let app = express();

//读取wwwroot下的静态文件
app.use(express.static('../wwwroot'));

let compiler = webpack(config("dev"));
app.use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: '/dist/',
    index: "index.html",
    stats: { colors: true },
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
}));

app.use(bodyParser.json());

app.get("/designnote/*", function (req, res) {
    let notePath = path.join("../apps", req.params[0], "readme.md");
    notePath = path.resolve(__dirname, notePath);
    res.sendFile(notePath);
});

app.get("/test", function (req, res) {
    res.send(["value1", "value2"]);
});

app.get("/*", function (req, res) {
    res.redirect("/dist/index.html");
});

let server = app.listen(8000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("服务已启动, http://%s:%s", "127.0.0.1", port);
})