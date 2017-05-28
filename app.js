const express = require('express');
const url = require('url');
const app = express();
const bodyParser = require('body-parser');
const articleModel = require('./public/js_files/article-model.js');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

const loggedUsers = [
    {
        username: 'MaryRGB',
        password: 'qwerty123',
        id: '1',
    },
    {
        username: 'Муромец Илья',
        password: 'богатырь',
        id: '2',
    },
    {
        username: 'Бонд Джеймс',
        password: '007БД',
        id: '3',
    },
];

app.use(session({
    secret: 'wellKnown secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 24*60*60,
    },
}));
passport.use(new LocalStrategy(
    function (username, password, done) {
        let user = loggedUsers.find(function (obj) {
            return (obj.username === username);
        });
        if(!user) {
            return done(null, false);
        }
        if(!(user.password === password)) {
            return done(null, false);
        }
        return done(null, user);
    }
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    let user = loggedUsers.find(function (obj) {
        return (obj.id === id);
    });
    if(user)
        return done(null, user);
    done(null, false);
});

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
app.post('/signIn', function (req, res) {
    passport.authenticate('local', function (err, user) {
        if(!user){
            return res.status(400).end();
        }
        const sess = req.session;
        sess.user = user;
        sess.save(function () {});
        return res.status(200).send(user.username);
    })(req, res);
});
app.get('/signOut', function (req, res) {
    req.session.destroy();
    res.sendStatus(200);
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
