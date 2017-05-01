'use strict';

const visualizer = (function () {
    let ARTICLE_TEMPLATE;
    let listOfArticles;
    let USER = null;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article');
        listOfArticles = document.querySelector('.left-column');
    }

    function formatTime(data) {
        return (((data.getHours() < 10) ? '0' + data.getHours() : data.getHours())
        + ':' + ((data.getMinutes() < 10) ? '0' + data.getMinutes() : data.getMinutes()));
    }

    function formatDate(data) {
        return (((data.getDate() < 10) ? ('0' + data.getDate()) : (data.getDate())) +
        '.' + ((data.getMonth() <= 8) ? ('0' + (data.getMonth() + 1)) : (data.getMonth() + 1)) + '.' + data.getFullYear());
    }
    function visualizeArticle(article) {
        let temp = ARTICLE_TEMPLATE;
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
        let listNodes = visualizeAll(news);
        listNodes.forEach(function (node) {
            listOfArticles.appendChild(node);
        });
    }
    function clearDOM() {
        listOfArticles.innerHTML = '';
    }
    function insertArticle(article) {
        listOfArticles.insertBefore(visualizeArticle(article), listOfArticles.firstChild);
    }
    function editArticle(id, article) {
        let q;
        q = document.getElementById(id);
        if (q) {
            q.querySelector('.title').textContent = article.title;
            q.querySelector('.summary').textContent = article.summary;
            q.querySelector('.plot').textContent = article.content;
        }
    }
    function removeArticle(id) {
        let a;
        let b;
        a = document.getElementById(id);
        if (a) {
            b = a.parentNode;
            if (b) {
                b.removeChild(a);
            }
        }
    }
    function changeUser(name) {
        let you = document.querySelector('#user');
        USER = name;
        you.textContent = name;
        if (USER) {
            document.querySelector('#sign').textContent = 'Выход';
            document.querySelector('.create').style = 'display: inline-block;';
            document.querySelector('#user').style = 'display: inline-block;';
            document.querySelector('.delete').style = 'display: inline-block;';
            document.querySelector('.edit').style = 'display: inline-block;';
            document.querySelector('#user').textContent = name;
        } else {
            document.querySelector('#sign').textContent = 'Вход';
            document.querySelector('.create').style = 'display: none;';
            document.querySelector('#user').style = 'display: none;';
            document.querySelector('.delete').style = 'display: none;';
            document.querySelector('.edit').style = 'display: none;';
        }
    }
    function openArt(temporary, id) {
        let temp = document.querySelector('.news');
        temp.id = id;
        temp.querySelector('.hat').textContent = temporary.title;
        temp.querySelector('.time-date').textContent = formatDate(temporary.createdAt) + ' ' + formatTime(temporary.createdAt);
        temp.querySelector('.written-by').textContent = 'Автор: ' + temporary.author;
        temp.querySelector('.plot').textContent = temporary.content;
    }
    function displayAE(art) {
        let ae = document.querySelector('.add-edit');
        if (art) {
            ae.querySelector('.in-name').value = art.title;
            ae.querySelector('.in-summary').value = art.summary;
            ae.querySelector('.in-content').value = art.content;
            ae.querySelector('.name-id-article').textContent = art.id;
            ae.querySelector('.name-who-wrote').textContent = art.author;
            ae.querySelector('.name-date-write').textContent = formatDate(art.createdAt) + ' ' + formatTime(art.createdAt);
        } else {
            ae.querySelector('.in-name').value = '';
            ae.querySelector('.in-summary').value = '';
            ae.querySelector('.in-content').value = '';
            ae.querySelector('.name-id-article').textContent = '';
            ae.querySelector('.name-who-wrote').textContent = USER;
            ae.querySelector('.name-date-write').textContent = formatDate(new Date())+formatTime(new Date);
        }
    }
    function clearSign() {
        let ae = document.querySelector('.authorization');
        ae.querySelector('.user-name').value = '';
        ae.querySelector('.password').value = '';
    }
    return {
        init,
        insertArticlesInDOM,
        clearDOM,
        insertArticle,
        editArticle,
        removeArticle,
        changeUser,
        openArt,
        displayAE,
        clearSign,
    };
}());
