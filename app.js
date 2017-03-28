var express = require('express');
var ap = express();
ap.use(express.static('public'));
ap.get('/index', function(req, re){
    res.send('Hello');
});
ap.listen(3000);