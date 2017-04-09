var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var articles = require('./public/js_files/article-model');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/articles',function(req, res){
    res.send(articles.articleModel.getArticles(0, 100));
});
app.get('/articles/:id',function(req, res){
    if(req.params) {
        var article = articles.articleModel.getArticle(req.params.id);
        res.send(article);
    }
    res.send(articles.articleModel.getArticles(0, 100));
});
app.get('/articles401/:id',function(req, res){
    res.sendStatus(401);
});

app.post('/articles', function(req, res){
    var newArticle ={
        id: String(Date.now()),
        title: req.body.title,
        summary: req.body.summary,
        createdAt: new Date(),
        author: req.body.author,
        content: req.body.content,
        exist: true
    };
    articles.articleModel.addArticle(newArticle);
    res.send(newArticle);
});

app.put('/articles/:id', function(req, res){
    var editArticle = articles.articleModel.getArticle(req.params.id);
    if(req.body.title)
        editArticle.title = req.body.title;
    if(req.body.summary)
        editArticle.summary = req.body.summary;
    if(req.body.content)
        editArticle.content = req.body.content;
    res.sendStatus(200);
});

app.delete('/articles/:id', function(req, res){
    articles.articleModel.getArticle(req.params.id).exist = false;
    res.sendStatus(200);
});

app.get('/', function(req, res){
    res.send('Hello');
});
app.listen(app.get('port'), function(){
    console.log('App is running on port', app.get('port'));
});