var express = require('express'),
    // fs = require('fs'),
    cons = require('consolidate'),
    swig = require('swig'),
    app = express();

swig.cache = false;
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('view cache', false);
app.set('views', __dirname + '/views');

app.use('/library', express.static('./library'));
// app.use(app.router);
app.use(function (err, req, res, next) {
    console.error(err);
    res.statusCode = 500;
    res.render("500");
});

app.get('/', function (req, res, next) {
    res.render('index');
});
app.get('/products', function (req, res, next) {
    res.render('list');
});
app.get('/detail/1', function (req, res, next) {
    res.render('detail');
});
app.get('/create', function (req, res, next) {
    res.render('create');
});

app.get('*', function (req, res, next) {
    res.statusCode = 404;
    res.render('404');
});

var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log("Server listening on port " + port);
