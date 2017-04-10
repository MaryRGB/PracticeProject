'use strict';

document.addEventListener('DOMContentLoaded', startApp);
function displayArticles(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 6;

    visualizer.insertArticlesInDOM(articleModel.getArticles(skip, top, filterConfig));
}
function startApp() {
    if (!localStorage.getItem('articles')) {
        var articlesString = JSON.stringify(articleModel.getForStorage());
        localStorage.setItem('articles', articlesString);
    } else {
        var articleString2 = localStorage.getItem('articles');
        articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        }));
    }
    visualizer.init();

    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConf) {
        visualizer.clearDOM();
        var showMoreParams = showMore.init(articleModel.getArticleAmount(filterConf),
            displayArticles);
        displayArticles(showMoreParams.skip, showMoreParams.top, filterConf);
    }
}
function removeArticle(id) {
    if (visualizer.removeArticle(id)) {
        return true;
    }
    return false;
}
function userChange(name) {
    visualizer.changeUser(name);
}
function openArticle(id) {
    document.querySelector('.left-column').style = 'display:none;';
    document.querySelector('.right-column').style = 'display:none;';
    document.querySelector('.show-more').style = 'display:none;';
    visualizer.openArt(id);
    document.querySelector('.news').style = 'display:block;';
}

function formToAE(type, id) {
    if (type === 'edit') {
        document.querySelector('.news').style = 'display:none;';
        visualizer.displayAE(id);
        document.querySelector('.add-edit').style='display:block;';
    } else {
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.left-column').style = 'display:none;';
        document.querySelector('.right-column').style = 'display:none;';
        document.querySelector('.show-more').style = 'display:none;';
        document.querySelector('.error').style = 'display:none;';
        visualizer.displayAE(id);
        document.querySelector('.add-edit').style = 'display:block;';
    }
}
function saveEveryThing(newArticle){
    if (newArticle.id) {
        if (!visualizer.editArticle(newArticle)) {
            document.querySelector('.add-edit').style = 'display:none;';
            showError();
            return false;
        }
    } else if (!articleModel.addArticle(newArticle)) {
        document.querySelector('.add-edit').style = 'display:none;';
        showError();
        return false;
    }
    return true;
}
function showError() {
    document.querySelector('.error').style = 'display:block;';
    visualizer.clearDOM();
    filter.reset();
    var showMoreParams = showMore.reset();
    displayArticles(showMoreParams.skip, showMoreParams.top);
    document.querySelector('.show-more').style = 'display:none;';
}

var articleListNode = document.querySelector('.left-column');
articleListNode.addEventListener('click', handleOpen);

function handleOpen(event) {
    var articleString2 = localStorage.getItem('articles');
    articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
        if (key === 'createdAt') {
            return new Date(value);
        }
        return value;
    }));
    var target = event.target;
    while (target.getAttribute('class') !== 'article') {
        target = target.parentNode;
    }
    if (target.getAttribute('class') === 'article') {
        openArticle(target.getAttribute('id'));
    }
}

var bodyNode = document.querySelector('body');
bodyNode.addEventListener('click', handleBack);
bodyNode.addEventListener('click', handleDelete);
bodyNode.addEventListener('click', handleAddEdit);
bodyNode.addEventListener('click', handleSave);

function handleBack(event) {
    var articleString2 = localStorage.getItem('articles');
    articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
        if (key === 'createdAt') {
            return new Date(value);
        }
        return value;
    }));
    var target = event.target;
    if (target.getAttribute('class') === 'back-to-main') {
        document.querySelector('.left-column').style = 'display:inline-block;';
        document.querySelector('.right-column').style = 'display:inline-block;';
        document.querySelector('.show-more').style = 'display:block;';
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.add-edit').style = 'display:none;';
        document.querySelector('.error').style = 'display:none;';
        document.querySelector('.authorization').style = 'display:none;';
    }
}
function handleDelete(event) {
    var target = event.target;
    if (target.getAttribute('class') === 'delete') {
        if (confirm('Вы действийтельно хотите удалить эту новость?')) {
            var articleString2 = localStorage.getItem('articles');
            articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
                if (key === 'createdAt') {
                    return new Date(value);
                }
                return value;
            }));

            removeArticle(target.parentNode.getAttribute('id'));
            visualizer.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            document.querySelector('.news').style = 'display:none;';
            document.querySelector('.left-column').style = 'display:inline-block;';
            document.querySelector('.right-column').style = 'display:inline-block;';

            var articlesString1 = JSON.stringify(articleModel.getForStorage());
            localStorage.setItem('articles', articlesString1);
        }
    }
}
function handleAddEdit(event) {
    var articleString2 = localStorage.getItem('articles');
    articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
        if (key === 'createdAt') {
            return new Date(value);
        }
        return value;
    }));
    var target = event.target;
    if (target.getAttribute('class') === 'edit'
        || target.getAttribute('class') === 'create' || target.getAttribute('class') === 'add') {
        formToAE(target.getAttribute('class'), target.parentNode.getAttribute('id'));
    }
}
function handleSave(event) {
    var target = event.target;
    var parent = target.parentNode;
    if (target.getAttribute('class') === 'save'){
        var articleString2 = localStorage.getItem('articles');
        articleModel.setFromStorage(JSON.parse(articleString2, function(key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        }));
        var newArticle = {
            title: parent.querySelector('.in-name').value,
            summary: parent.querySelector('.in-summary').value,
            content: parent.querySelector('.in-content').value,
            id: parent.querySelector('.name-id-article').textContent,
            createdAt: parent.querySelector('.name-date-write').textContent,
            author: parent.querySelector('.name-who-wrote').textContent,
        };
        if (saveEveryThing(newArticle)) {
            document.querySelector('.add-edit').style = 'display:none;';
            visualizer.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            openArticle(newArticle.id);
        }
        var articlesString1 = JSON.stringify(articleModel.getForStorage());
        localStorage.setItem('articles', articlesString1);
    }
}

var headNode = document.querySelector('#head');
headNode.addEventListener('click', handleSign);

function handleSign(event) {
    var target = event.target;
    if (target.textContent === 'Вход') {
        document.querySelector('.authorization').style = 'display:block;';
        document.querySelector('.left-column').style = 'display:none;';
        document.querySelector('.right-column').style = 'display:none;';
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.show-more').style = 'display:none;';
        document.querySelector('.error').style = 'display:none;';
        visualizer.clearSign();
    }
    if (target.textContent === 'Выход') {
        document.querySelector('.left-column').style = 'display:inline-block;';
        document.querySelector('.right-column').style = 'display:inline-block;';
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.authorization').style = 'display:none;';
        visualizer.clearDOM();
        filter.reset();
        var showMoreParams = showMore.reset();
        displayArticles(showMoreParams.skip, showMoreParams.top);
        userChange();
    }
}

bodyNode.addEventListener('click', handleSignIN);
function handleSignIN(event) {
    var target = event.target;
    if (target.textContent === 'Войти') {
        var person = {
            login: target.parentNode.querySelector('.user-name').value,
            password: target.parentNode.querySelector('.password').value
        };
        if (articleModel.findUser(person)) {
            userChange(person.login);
            visualizer.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            document.querySelector('.left-column').style = 'display:inline-block;';
            document.querySelector('.right-column').style = 'display:inline-block;';
            document.querySelector('.authorization').style = 'display:none;';
        } else {
            document.querySelector('.authorization').style = 'display:none;';
            showError();
        }
    }
}

var showMore = (function () {
    var total;
    var PER_PAGE = 6;
    var currentPage = 1;
    var PAGINATION_BUTTON;
    var callBack;

    PAGINATION_BUTTON = document.querySelector('.show-more');
    PAGINATION_BUTTON.addEventListener('click', handleShowMoreClick);

    function init(amount, CB) {
        currentPage = 1;
        total = amount;
        callBack = CB;
        hideShowPagination();
        return getParams();
    }
    function handleShowMoreClick(event) {
        if (event.target.getAttribute('class') === 'show-more') {
            var paginationParams = nextPage();
            callBack(paginationParams.skip, paginationParams.top);
        }
    }
    function getParams() {
        return {
            top: PER_PAGE,
            skip: (currentPage - 1) * PER_PAGE
        };
    }
    function getCurrentTotal() {
        return Math.ceil(total / PER_PAGE);
    }
    function nextPage() {
        currentPage = currentPage + 1;
        hideShowPagination();
        return getParams();
    }
    function hideShowPagination() {
        if (getCurrentTotal() <= currentPage) {
            PAGINATION_BUTTON.style = 'display: none;';
        } else {
            PAGINATION_BUTTON.style = 'display: block;';
        }
    }
    function reset() {
        currentPage = 1;
        hideShowPagination();
        return getParams();
    }
    return {
        init: init,
        reset: reset
    };
}());

var filter = (function () {
    var FORM;
    var FILT_BUTTON;
    var filterCallBack;
    FORM = document.querySelector('.filter');
    FILT_BUTTON = document.querySelector('.filt');
    FILT_BUTTON.addEventListener('click', handleFiltClick);

    function init(filtCB) {
        filterCallBack = filtCB;
        return getFilter();
    }
    function getFilter() {
        var authorSelect = FORM.querySelector('.in1').value;
        var fromSelect = FORM.querySelector('.in2').value;
        var upTOSelect = FORM.querySelector('.in3').value;

        return {
            author: authorSelect,
            from: fromSelect,
            upTo: upTOSelect,
        };
    }
    function handleFiltClick(event) {
        return filterCallBack(getFilter());
    }
    function reset() {
        articleModel.getArticleAmount(
            {
                author: FORM.querySelector('.in1').value = '',
                from: FORM.querySelector('.in2').value = '',
                upTo: FORM.querySelector('.in3').value = '',
            });
    }
    return {
        init: init,
        getFilterConfig: getFilter(),
        reset: reset,
    };
}());
