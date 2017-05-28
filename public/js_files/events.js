'use strict';

document.addEventListener('DOMContentLoaded', startApp);
function displayArticles(articles) {
    visualizer.insertArticlesInDOM(articles);
}
function PromiseStartApp() {
    return new Promise(function (resolve, reject) {
        function handler() {
            if (this.responseText) {
                resolve(this.responseText);
                cleanUp();
            }
            reject();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        const filterConfig = filter.getFilter();
        const params = 'author=' + encodeURIComponent(filterConfig.author)
            + '&upTo=' + encodeURIComponent(filterConfig.upTo) + '&from=' + encodeURIComponent(filterConfig.from);
        const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/articles?' + params);
        oReq.send();
    });
}
function startApp() {
    PromiseStartApp().then(function (responseText) {
        const tempArticles = JSON.parse(responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        visualizer.init();
        visualizer.clearDOM();
        displayArticles(tempArticles);
    });
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
function PromiseformToAE(id) {
    return new Promise(function (resolve, reject) {
        let article;
        function handler() {
           resolve(this.responseText);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/articles/edit/' + id);
        oReq.send();
    });
}
function formToAE(type, id) {
    var article;
    if (type === 'edit'){
        PromiseformToAE(id).then(function (responseText) {
            article = JSON.parse(responseText, function (key, value) {
                if (key === 'createdAt') {
                    return new Date(value);
                }
                return value;
            });
            document.querySelector('.news').style = 'display:none;';
            visualizer.displayAE(article);
            document.querySelector('.add-edit').style = 'display:block;';
        });
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
    document.querySelector('.show-more').style = 'display:none;';
    document.querySelector('.error').style = 'display:block;';
}

const articleListNode = document.querySelector('.left-column');
articleListNode.addEventListener('click', handleOpen);

function PromiseHandleOpen(id) {
    return new Promise(function(resolve, reject) {
        const oReq = new XMLHttpRequest();
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        function handler() {
            resolve(this.responseText);
            cleanUp();
        }
        const string = '/articles/' + id;
        oReq.addEventListener('load', handler);
        oReq.open('GET', string);
        oReq.send();
    });
}
function handleOpen(event) {
    let target = event.target;
    while (target.getAttribute('class') !== 'article') {
        target = target.parentNode;
    }
    if (target.getAttribute('class') === 'article') {
        PromiseHandleOpen(target.getAttribute('id')).then(function (responseText) {
            let oneArticle = JSON.parse(responseText);
            oneArticle.createdAt = new Date(oneArticle.createdAt);
            document.querySelector('.show-more').style = 'display:none;';
            openArticle(oneArticle, target.getAttribute('id'));
        });
    }
}

const bodyNode = document.querySelector('body');
bodyNode.addEventListener('click', handleBack);
bodyNode.addEventListener('click', handleDelete);
bodyNode.addEventListener('click', handleAddEdit);
bodyNode.addEventListener('click', handleSave);

function PromiseHandleBack() {
    return new Promise(function (resolve, reject) {
        const filterConfig = filter.getFilter();
        const params = 'author=' + encodeURIComponent(filterConfig.author)
            + '&upTo=' + encodeURIComponent(filterConfig.upTo) + '&from=' + encodeURIComponent(filterConfig.from);
        const oReq = new XMLHttpRequest();
        function handler() {
            resolve(this.responseText);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        oReq.addEventListener('load', handler);
        oReq.open('GET','/articles?' + params);
        oReq.send();
    });
}
function handleBack(event) {
    const target = event.target;
    if (target.getAttribute('class') === 'back-to-main') {
        PromiseHandleBack().then(function(responseText) {
            const tempArticles = JSON.parse(responseText, function (key, value) {
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
        });
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

function PromiseHandleSave(newArticle) {
    return new Promise(function (resolve, reject) {
        const oReq = new XMLHttpRequest();
        function handler() {
            resolve(this.responseText);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
            oReq.addEventListener('load', handler);
            oReq.open('PUT', '/articles/save');
            oReq.setRequestHeader('content-type', 'application/json');
            const body = JSON.stringify(newArticle);
            oReq.send(body);
    });
}
function handleSave(event) {
    const target = event.target;
    const parent = target.parentNode;
    if (target.getAttribute('class') === 'save') {
        const newArticle = {
            title: parent.querySelector('.in-name').value,
            summary: parent.querySelector('.in-summary').value,
            content: parent.querySelector('.in-content').value,
            id: parent.querySelector('.name-id-article').textContent,
            createdAt: new Date(parent.querySelector('.name-date-write').textContent),
            author: parent.querySelector('.name-who-wrote').textContent,
            exist: true,
        };
        PromiseHandleSave(newArticle).then(function (responseText) {
            const tempArticle = JSON.parse(responseText, function (key, value) {
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
        });

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
function PromiseHandleSignIN(person) {
 return new Promise(function (resolve, reject) {
     const oReq = new XMLHttpRequest();
     function handler() {
         resolve(this.responseText);
         cleanUp();
     }
     function cleanUp() {
         oReq.removeEventListener('load', handler);
     }
     const params = 'login=' + encodeURIComponent(person.login) + '&password=' + encodeURIComponent(person.password);
     oReq.addEventListener('load', handler);
     oReq.open('GET', '/signIn?' + params);
     oReq.send();
 });
}

bodyNode.addEventListener('click', handleSignIN);
function handleSignIN(event) {
    var person;
    const target = event.target;
    if (target.textContent === 'Войти') {
        person = {
            login: target.parentNode.querySelector('.user-name').value,
            password: target.parentNode.querySelector('.password').value,
        };
        PromiseHandleSignIN(person).then(function (responseText) {
            if (responseText) {
                userChange(person.login);
                document.querySelector('.left-column').style = 'display:inline-block;';
                document.querySelector('.right-column').style = 'display:inline-block;';
                document.querySelector('.authorization').style = 'display:none;';
            } else {
                document.querySelector('.authorization').style = 'display:none;';
                showError();
            }
        });
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
    function PromiseHandleShowMoreClick(params) {
     return new Promise(function (resolve, reject) {
         const oReq = new XMLHttpRequest();
         function handler() {
             resolve(this.responseText);
             cleanUp();
         }
         function cleanUp() {
             oReq.removeEventListener('load', handler);
         }
         oReq.addEventListener('load', handler);
         oReq.open('GET', '/articles?' + params);
         oReq.send();
     });
    }
    function handleShowMoreClick(event) {
        if (event.target.getAttribute('class') === 'show-more') {
            const paginationParams = nextPage();
            const filterParams = filter.getFilter();
            const params = 'author=' + encodeURIComponent(filterParams.author)
                + '&upTo=' + encodeURIComponent(filterParams.upTo) + '&from=' + encodeURIComponent(filterParams.from)
                + '&top=' + encodeURIComponent(paginationParams.top) + '&skip=' + encodeURIComponent(paginationParams.skip);
            PromiseHandleShowMoreClick(params).then(function (responseText) {
                const tempArticles = JSON.parse(responseText, function (key, value) {
                    if (key === 'createdAt') {
                        return new Date(value);
                    }
                    return value;
                });
                callBack(tempArticles);
            });
            hideShowPagination();
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

        return getParams();
    }
    function PromiseHideShowPagination() {
     return new Promise(function (resolve, reject) {
         const oReq = new XMLHttpRequest();
         function cleanUp() {
             oReq.removeEventListener('load', handler);
         }
         function handler() {
             resolve(this.responseText);
             cleanUp();
         }
         oReq.addEventListener('load', handler);
         oReq.open('GET', '/amount');
         oReq.send();
     });
     }
    function hideShowPagination() {
        var total;
        PromiseHideShowPagination().then(function (responseText) {
            total = Number(JSON.parse(responseText));
            if (Math.ceil(total / PER_PAGE) <= currentPage) {
                PAGINATION_BUTTON.style = 'display: none;';
            } else {
                PAGINATION_BUTTON.style = 'display: block;';
            }
        });
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
    function PromiseHandleFiltClick() {
     return new Promise(function (resolve, reject) {
         function handler() {
             resolve(this.responseText);
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
     });
     }
    function handleFiltClick(event) {
        PromiseHandleFiltClick().then(function(responseText) {
            const tempArticles = JSON.parse(responseText, function (key, value) {
                if (key === 'createdAt') {
                    return new Date(value);
                }
                return value;
            });
            visualizer.clearDOM();
            displayArticles(tempArticles);
        });
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

function PromiseDisplayResetFiltPag() {
    return new Promise(function (resolve, reject) {
        const filterParams = filter.reset();
        const params = 'author=' + encodeURIComponent(filterParams.author)
            + '&upTo=' + encodeURIComponent(filterParams.upTo) + '&from=' + encodeURIComponent(filterParams.from);
        const oReq = new XMLHttpRequest();
        function handler() {
            resolve(this.responseText);
            cleanUp();
        }
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        oReq.addEventListener('load', handler);
        oReq.open('GET', '/articles?' + params);
        oReq.send();
    });
}
function displayResetFiltPag() {
    PromiseDisplayResetFiltPag().then(function (responseText) {
        const tempArticles = JSON.parse(responseText, function (key, value) {
            if (key === 'createdAt') {
                return new Date(value);
            }
            return value;
        });
        visualizer.clearDOM();
        displayArticles(tempArticles);
    });
    showMore.reset();
}

function PromiseResetFiltPag() {
 return new Promise(function (resolve, reject) {
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
 });
 }
function resetFiltPag() {
    PromiseResetFiltPag();
    showMore.reset();
}
