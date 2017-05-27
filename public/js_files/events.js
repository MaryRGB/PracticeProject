'use strict';

document.addEventListener('DOMContentLoaded', startApp);
function displayArticles(articles) {
    visualizer.insertArticlesInDOM(articles);
}
function startApp() {
    const filterConfig = filter.getFilter();
    const params = 'author=' + encodeURIComponent(filterConfig.author)
        + '&upTo=' + encodeURIComponent(filterConfig.upTo) + '&from=' + encodeURIComponent(filterConfig.from);
    const oReq = new XMLHttpRequest();
    function handler() {
        const tempArticles = JSON.parse(this.responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        visualizer.init();
        visualizer.clearDOM();
        displayArticles(tempArticles);
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    oReq.addEventListener('load', handler);
    oReq.open('GET', '/articles?' + params);
    oReq.send();
    showMore.init(displayArticles);
}

function userChange(name) {
    visualizer.changeUser(name);
}
function openArticle(article, id) {
    document.querySelector('.left-column').style = 'display:none;';
    document.querySelector('.right-column').style = 'display:none;';
    document.querySelector('.show-more').style = 'display:none;';
    visualizer.openArt(article, id);
    document.querySelector('.news').style = 'display:block;';
}

function formToAE(type, id) {
    let article;
    function handler() {
        article = JSON.parse(this.responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        document.querySelector('.news').style = 'display:none;';
        visualizer.displayAE(article);
        document.querySelector('.add-edit').style = 'display:block;';
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    const oReq = new XMLHttpRequest();
    if (type === 'edit') {
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/articles/edit/' + id);
        oReq.send();
    } else {
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.left-column').style = 'display:none;';
        document.querySelector('.right-column').style = 'display:none;';
        document.querySelector('.show-more').style = 'display:none;';
        document.querySelector('.error').style = 'display:none;';
        visualizer.displayAE(article);
        document.querySelector('.add-edit').style = 'display:block;';
    }
}
function showError() {
    document.querySelector('.error').style = 'display:block;';
    document.querySelector('.show-more').style = 'display:none;';
}

const articleListNode = document.querySelector('.left-column');
articleListNode.addEventListener('click', handleOpen);

function handleOpen(event) {
    const oReq = new XMLHttpRequest();
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    function handler() {
        let oneArticle = JSON.parse(this.responseText);
        oneArticle.createdAt = new Date(oneArticle.createdAt);
        openArticle(oneArticle, target.getAttribute('id'));
        cleanUp();
    }

    let target = event.target;
    while (target.getAttribute('class') !== 'article') {
        target = target.parentNode;
    }
    if (target.getAttribute('class') === 'article') {
        const string = '/articles/' + target.getAttribute('id');
        oReq.addEventListener('load', handler);
        oReq.open('GET', string);
        oReq.send();
    }
}

const bodyNode = document.querySelector('body');
bodyNode.addEventListener('click', handleBack);
bodyNode.addEventListener('click', handleDelete);
bodyNode.addEventListener('click', handleAddEdit);
bodyNode.addEventListener('click', handleSave);

function handleBack(event) {
    const filterConfig = filter.getFilter();
    const params = 'author=' + encodeURIComponent(filterConfig.author)
        + '&upTo=' + encodeURIComponent(filterConfig.upTo) + '&from=' + encodeURIComponent(filterConfig.from);
    const oReq = new XMLHttpRequest();
    function handler() {
        const tempArticles = JSON.parse(this.responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        visualizer.clearDOM();
        displayArticles(tempArticles);
        document.querySelector('.left-column').style = 'display:inline-block;';
        document.querySelector('.right-column').style = 'display:inline-block;';
        document.querySelector('.show-more').style = 'display:block;';
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.add-edit').style = 'display:none;';
        document.querySelector('.error').style = 'display:none;';
        document.querySelector('.authorization').style = 'display:none;';
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }

    const target = event.target;
    if (target.getAttribute('class') === 'back-to-main') {
        oReq.addEventListener('load', handler);
        oReq.open('GET','/articles?' + params);
        oReq.send();
        showMore.reset();
    }
}
function handleDelete(event) {
    const target = event.target;
    if (target.getAttribute('class') === 'delete') {
        if (confirm('Вы действийтельно хотите удалить эту новость?')) {
            const oReq = new XMLHttpRequest();
            oReq.open('DELETE', '/articles/' + target.parentNode.getAttribute('id'));
            oReq.send();

            displayResetFiltPag();
            document.querySelector('.news').style = 'display:none;';
            document.querySelector('.left-column').style = 'display:inline-block;';
            document.querySelector('.right-column').style = 'display:inline-block;';
        }
    }
}
function handleAddEdit(event) {
    const target = event.target;
    if (target.getAttribute('class') === 'edit'
        || target.getAttribute('class') === 'create' || target.getAttribute('class') === 'add') {
        formToAE(target.getAttribute('class'), target.parentNode.getAttribute('id'));
    }
}
function handleSave(event) {
    const target = event.target;
    const parent = target.parentNode;
    const oReq = new XMLHttpRequest();
    function handler() {
        const tempArticle = JSON.parse(this.responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        if (tempArticle.oops == false) {
            document.querySelector('.add-edit').style = 'display:none;';
            openArticle(tempArticle, tempArticle.id);
        } else {
            document.querySelector('.add-edit').style = 'display:none;';
            showError();
        }
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    if (target.getAttribute('class') === 'save') {
        oReq.addEventListener('load', handler);
        oReq.open('PUT', '/articles/save');
        oReq.setRequestHeader('content-type', 'application/json');
        const newArticle = {
            title: parent.querySelector('.in-name').value,
            summary: parent.querySelector('.in-summary').value,
            content: parent.querySelector('.in-content').value,
            id: parent.querySelector('.name-id-article').textContent,
            createdAt: new Date(parent.querySelector('.name-date-write').textContent),
            author: parent.querySelector('.name-who-wrote').textContent,
            exist: true,
        };
        const body = JSON.stringify(newArticle);
        oReq.send(body);

        resetFiltPag();
    }
}

const headNode = document.querySelector('#head');
headNode.addEventListener('click', handleSign);

function handleSign(event) {
    const target = event.target;
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
        displayResetFiltPag();
        userChange();
        document.querySelector('.left-column').style = 'display:inline-block;';
        document.querySelector('.right-column').style = 'display:inline-block;';
        document.querySelector('.news').style = 'display:none;';
        document.querySelector('.authorization').style = 'display:none;';
        document.querySelector('.add-edit').style = 'display:none;';
    }
}

bodyNode.addEventListener('click', handleSignIN);
function handleSignIN(event) {
    let person;
    const target = event.target;
    const oReq = new XMLHttpRequest();
    function handler() {
        if (this.responseText) {
            userChange(person.login);
            document.querySelector('.left-column').style = 'display:inline-block;';
            document.querySelector('.right-column').style = 'display:inline-block;';
            document.querySelector('.authorization').style = 'display:none;';
        } else {
            document.querySelector('.authorization').style = 'display:none;';
            showError();
        }
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    if (target.textContent === 'Войти') {
        person = {
            login: target.parentNode.querySelector('.user-name').value,
            password: target.parentNode.querySelector('.password').value
        };
        const params = 'login=' + encodeURIComponent(person.login) + '&password=' + encodeURIComponent(person.password);
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/signIn?' + params);
        oReq.send();
        displayResetFiltPag();
    }
}

const showMore = (function () {
    const PER_PAGE = 6;
    let currentPage = 1;
    let PAGINATION_BUTTON;
    let callBack;

    PAGINATION_BUTTON = document.querySelector('.show-more');
    PAGINATION_BUTTON.addEventListener('click', handleShowMoreClick);

    function init(CB) {
        currentPage = 1;
        callBack = CB;
        hideShowPagination();
    }
    function handleShowMoreClick(event) {
        const oReq = new XMLHttpRequest();
        function handler() {
            const tempArticles = JSON.parse(this.responseText, function (key, value) {
                if (key === 'createdAt') {
                    return new Date(value);
                }
                return value;
            });
            callBack(tempArticles);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        if (event.target.getAttribute('class') === 'show-more') {
            const paginationParams = nextPage();
            const params = 'top=' + encodeURIComponent(paginationParams.top) + '&skip=' + encodeURIComponent(paginationParams.skip);
            oReq.addEventListener('load', handler);
            oReq.open('GET', '/articles?' + params);
            oReq.send();
        }
    }
    function getParams() {
        return {
            top: PER_PAGE,
            skip: (currentPage - 1) * PER_PAGE,
        };
    }
    function nextPage() {
        currentPage = currentPage + 1;
        hideShowPagination();
        return getParams();
    }
    function hideShowPagination() {
        var total;
        const oReq = new XMLHttpRequest();
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        function handler() {
            total = Number(JSON.parse(this.responseText));
            if (Math.ceil(total/PER_PAGE) <= currentPage) {
                console.log('nothing to show');
                PAGINATION_BUTTON.style = 'display: none;';
            } else {
                console.log(total);
                PAGINATION_BUTTON.style = 'display: block;';
            }
            cleanUp();
        }
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/amount');
        oReq.send();
    }
    function reset() {
        currentPage = 1;
        hideShowPagination();
        return getParams();
    }
    return {
        init,
        reset,
        getParams,
    };
}());

const filter = (function () {
    let FORM;
    let FILT_BUTTON;
    FORM = document.querySelector('.filter');
    FILT_BUTTON = document.querySelector('.filt');
    FILT_BUTTON.addEventListener('click', handleFiltClick);

    function getFilter() {
        const authorSelect = FORM.querySelector('.in1').value;
        const fromSelect = FORM.querySelector('.in2').value;
        const upTOSelect = FORM.querySelector('.in3').value;

        return {
            author: authorSelect,
            from: fromSelect,
            upTo: upTOSelect,
        };
    }
    function handleFiltClick(event) {
        function handler() {
            const tempArticles = JSON.parse(this.responseText, function (key, value) {
                if (key === 'createdAt') {
                    return new Date(value);
                }
                return value;
            });
            visualizer.clearDOM();
            displayArticles(tempArticles);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        const filterParams = getFilter();
        const params = 'author=' + encodeURIComponent(filterParams.author)
            + '&upTo=' + encodeURIComponent(filterParams.upTo) + '&from=' + encodeURIComponent(filterParams.from);
        let oReq = new XMLHttpRequest();
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/articles?' + params);
        oReq.send();
        showMore.reset();
    }
    function reset() {
        const fill = {
            author: FORM.querySelector('.in1').value = '',
            from: FORM.querySelector('.in2').value = '',
            upTo: FORM.querySelector('.in3').value = '',
        };
        return fill;
    }
    return {
        getFilter,
        reset,
    };
}());

function displayResetFiltPag() {
    const filterParams = filter.reset();
    const showMoreParams = showMore.getParams();
    const params = 'author=' + encodeURIComponent(filterParams.author)
        + '&upTo=' + encodeURIComponent(filterParams.upTo) + '&from=' + encodeURIComponent(filterParams.from)
        + '&top=' + encodeURIComponent(showMoreParams.top) + '&skip=' + encodeURIComponent(showMoreParams.skip);
    const oReq = new XMLHttpRequest();
    function handler() {
        const tempArticles = JSON.parse(this.responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        visualizer.clearDOM();
        displayArticles(tempArticles);
        cleanUp();
    }
    function cleanUp() {
        oReq.removeEventListener('load', handler);
    }
    oReq.addEventListener('load', handler);
    oReq.open('GET', '/articles?' + params);
    oReq.send();
    showMore.reset();
}

function resetFiltPag() {
    const filterParams = filter.reset();
    const oReq = new XMLHttpRequest();
    const params = {
        author: filterParams.author,
        upTo: filterParams.upTo,
        from: filterParams.from,
    };
    const body = JSON.stringify(params);
    oReq.open('PUT', '/articles/filter');
    oReq.setRequestHeader('content-type', 'application/json');
    oReq.send(body);
    showMore.reset();
}
