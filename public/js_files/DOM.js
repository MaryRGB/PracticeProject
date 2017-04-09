'use strict';

var visualizer = (function() {
    var ARTICLE_TEMPLATE;
    var listOfArticles;
    var oneArticle;
    var USER = null;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article');
        listOfArticles = document.querySelector('.left-column');
        oneArticle=document.querySelector('.body');
    }

    function visualizeArticle(article) {
        var temp = ARTICLE_TEMPLATE;
        temp.content.querySelector('.article').id = article.id;
        temp.content.querySelector('.title').textContent = article.title;
        temp.content.querySelector('.time').textContent = formatTime(article.createdAt);
        temp.content.querySelector('.summary').textContent = article.summary;
        temp.content.querySelector('.date').textContent = formatDate(article.createdAt);
        temp.content.querySelector('.author').textContent = article.author;
        return temp.content.cloneNode(true);
    }

    function visualizeAll(news) {
        return news.map(function (obj) {
            return visualizeArticle(obj);
        });
    }

    function insertArticlesInDOM(news) {
        var listNodes = visualizeAll(news);
        listNodes.forEach(function (node) {
            listOfArticles.appendChild(node);
        });
    }
    function formatTime(data) {
        return (((data.getHours() < 10)? '0'+data.getHours():data.getHours()) + ':' + ((data.getMinutes() < 10)? '0'+data.getMinutes():data.getMinutes()));
    }

    function formatDate(data) {
        return (((data.getDate() < 10)? ('0'+data.getDate()):(data.getDate())) +
        '.' + ((data.getMonth() <= 8)? ('0'+(data.getMonth()+1)):(data.getMonth()+1)) + '.' + data.getFullYear());
    }

    function clearDOM() {
        listOfArticles.innerHTML = '';
    }
    function insertArticle(article){
        if(articleModel.addArticle(article)) {
            listOfArticles.insertBefore(visualizeArticle(article), listOfArticles.firstChild);
            return true;
        }
        return false;
    }
    function editArticle(id, article){
        if(articleModel.editArticle(id,article)){
            var q = document.getElementById(id);
            if(q) {
                q.querySelector('.title').textContent = article.title;
                q.querySelector('.summary').textContent = article.summary;
                q.querySelector('.plot').textContent = article.content;
            }
            return true;
        }
        return false;
    }
    function removeArticle(id){
        if(articleModel.removeArticle(id) === true){
            var a = document.getElementById(id);
            if(a) {
                var b = a.parentNode;
                if (b)
                    b.removeChild(a);
            }
            return true;
        }
        else
            return false;
    }
    function changeUser(name){
        var you = document.querySelector('#user');
        USER = name;
        you.textContent = name;
        if(USER){
            document.querySelector('#sign').textContent = 'Выход';
            document.querySelector('.create').style.display = 'inline-block;';
            document.querySelector('#user').style.display = 'inline-block;';
            document.querySelector('.delete').style.display = 'inline-block;';
            document.querySelector('.edit').style.display = 'inline-block;';
            document.querySelector('#user').textContent = name;
        }
        else {
            document.querySelector('#sign').textContent = 'Вход';
            document.querySelector('.create').style.display = 'none;';
            document.querySelector('#user').style.display = 'none;';
            document.querySelector('.delete').style.display = 'none;';
            document.querySelector('.edit').style.display = 'none;';
        }
    }
    function openArt(id) {
        var temporary = articleModel.getArticle(id);
        var temp = document.querySelector('.news');
        temp.id = id;
        temp.querySelector('.hat').textContent =temporary.title;
        temp.querySelector('.time-date').textContent =formatDate(temporary.createdAt) +' '+formatTime(temporary.createdAt);
        temp.querySelector('.written-by').textContent ='Автор: '+ temporary.author;
        temp.querySelector('.plot').textContent = temporary.content;
    }
    function displayAE(id){
        var art;
        var ae = document.querySelector('.add-edit');
        if(art=articleModel.getArticle(id)){
            ae.querySelector('.in-name').value = art.title;
            ae.querySelector('.in-summary').value = art.summary;
            ae.querySelector('.in-content').value = art.content;
            ae.querySelector('.name-id-article').textContent = art.id;
            ae.querySelector('.name-who-wrote').textContent = art.author;
            ae.querySelector('.name-date-write').textContent = formatDate(art.createdAt)+' '+formatTime(art.createdAt);
        }
        else {
            ae.querySelector('.in-name').value = '';
            ae.querySelector('.in-summary').value = '';
            ae.querySelector('.in-content').value = '';
            ae.querySelector('.name-id-article').textContent = '';
            ae.querySelector('.name-who-wrote').textContent = USER;
            ae.querySelector('.name-date-write').textContent = formatDate(new Date())+formatTime(new Date);
        }
    }
    function clearSign(){
        var ae = document.querySelector('.authorization');
        ae.querySelector('.user-name').value = '';
        ae.querySelector('.password').value = '';
    }
    return{
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        clearDOM: clearDOM,
        insertArticle: insertArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        changeUser: changeUser,
        openArt: openArt,
        displayAE: displayAE,
        clearSign: clearSign
    }
}());