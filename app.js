const express = require('express');
const url = require('url');
const app = express();
const bodyParser = require('body-parser');
const articleModel = require('./public/js_files/article-model.js');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/articles', function (req, res) {
    let s;
    let t;
    if (isNaN(req.query.skip) && isNaN(req.query.top)) {
        s = 0;
        t = 6;
    } else {
        s = Number(req.query.skip);
        t = Number(req.query.top);
    }
    let filter = {};
    if (req.query.author) {
        filter.author = req.query.author;
    }
    if (req.query.upTo) {
        filter.upTo = req.query.upTo;
    }
    if (req.query.from) {
        filter.from = req.query.from;
    }
    res.json(articleModel.getArticles(s, t, filter));
});
app.get('/articles/:id', function (req, res) {
    const article = articleModel.getArticle(req.params.id);
    res.json(article);
});
app.get('/articles/edit/:id', function (req, res) {
    const article = articleModel.getArticle(req.params.id);
    res.json(article);
});
app.get('/signIn', function (req, res) {
    const article = articleModel.findUser(req.query.login, req.query.password);
    res.json(article);
});
app.get('/amount', function (req, res) {
    const am = articleModel.getArticleAmount();
    res.json(am);
});

app.put('/articles/save', function (req, res) {
    let neArticle;
    if (req.body.id !== '') {
        neArticle = {
            id: req.body.id,
            title: req.body.title,
            summary: req.body.summary,
            createdAt: req.body.createdAt,
            author: req.body.author,
            content: req.body.content,
            exist: true,
            oops: false,
        };
        if (!articleModel.editArticle(neArticle)) {
            neArticle.oops = true;
        }
    } else {
        neArticle = {
            id: String(Date.now()),
            title: req.body.title,
            summary: req.body.summary,
            createdAt: new Date(),
            author: req.body.author,
            content: req.body.content,
            exist: true,
            oops: false,
        };
        if (!articleModel.addArticle(neArticle)) {
            neArticle.oops = true;
        }
    }
    res.json(neArticle);
});

app.put('/articles/filter', function (req, res) {
    const params = {
        author: req.body.author,
        upTo: req.body.upTo,
        from: req.body.from,
    };
    articleModel.changeFilter(params);
    res.sendStatus(200);
});

app.delete('/articles/:id', function (req, res) {
    const toDel = articleModel.getArticle(req.params.id);
    toDel.exist = false;
    res.sendStatus(200);
});
app.listen(app.get('port'), function () {
    console.log('App is running on port', app.get('port'));
});
