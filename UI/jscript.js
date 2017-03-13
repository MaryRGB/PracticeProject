"use strict";
var articleModel = (function(){
    var articles = [
        {
            id: '1',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017.02.27 23:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '2',
            title: 'Прыгун в высоту принес Беларуси третью медаль на ЧЕ-2017',
            summary: '20-летний Павел Селиверстов принес Беларуси третью медаль на ЧЕ по легкой атлетике в помещении.',
            createdAt: new Date('2017.03.05 20:20:00'),
            author: 'Селезнев Андрей',
            content: 'Лучшим результатом белоруса стала высота 2,27 м, и этого показателя хватило для бронзовой награды. Павел Селиверстов по меньшему числу попыток опередил еще трех соперников, также преодолевших 2,27 м — болгарина Тихомира Иванова, словака Матуша Бубеника и итальянца Сильвано Кьезани.'
        },
        {
            id: '3',
            title: 'Выявлена причина гибели последних мамонтов на Земле',
            summary: 'Биологи из Калифорнийского университета в Беркли (США) назвали причину исчезновения мамонтов.',
            createdAt: new Date('2017.01.11 08:20:15'),
            author: 'Кузнецов Петя',
            content: 'Изолированная популяция карликового подвида шерстистых мамонтов (вид Mammuthus primigenius), проживавшего несколько тысяч лет назад на острове Врангеля, «накопила» слишком много вредных мутаций. Речь идет о потере множества обонятельных рецепторов, а также изменениях в активности генов, отвечающих за выбор партнера и положение в социальной иерархии.'
        },
        {
            id: '4',
            title: 'Новый флагман Sony назван лучшим смартфоном MWC-2017',
            summary: 'На выставке MWC-2017 свои новинки показали многие мировые бренды.',
            createdAt: new Date('2017.01.11 10:20:15'),
            author: 'Селезнев Андрей',
            content: 'Изолированная популяция карликового подвида шерстистых мамонтов (вид Mammuthus primigenius), проживавшего несколько тысяч лет назад на острове Врангеля, «накопила» слишком много вредных мутаций. Речь идет о потере множества обонятельных рецепторов, а также изменениях в активности генов, отвечающих за выбор партнера и положение в социальной иерархии.'
        },
        {
            id: '5',
            title: 'Фестивалем "Рыцарство на все времена" Минск начал праздновать 950-летие',
            summary: 'У городской Ратуши прошел фестиваль «Рыцарство на все времена».',
            createdAt: new Date('2017-03-05T20:20:00'),
            author: 'Марина Карп',
            content: 'Битва на Немиге стала первым летописным упоминанием Минска. Упоминание датировано 3 марта 1067 года. Именно этот день принят за день рождения Минска, хотя День города белорусская столица отмечает в сентябре. 3 марта 2017 года у городской Ратуши прошел фестиваль «Рыцарство на все времена». Он начал серию еженедельных выступлений и исторических реконструкций в центре города.'
        },
        {
            id: '6',
            title: 'Белорусские биатлонистки заняли 10-е место в эстафете на этапе Кубка мира',
            summary: 'Женская сборная Беларуси по биатлону заняла десятое место в эстафете на этапе Кубка мира в южнокорейском Пхенчхане.',
            createdAt: new Date('2016.10.25 15:34:22'),
            author: 'Медов Дмитрий',
            content: 'С самого начала гонка для нашей команды складывалась не лучшим образом. Надежда Скардино трижды прибегнула к дополнительным патронам и передала эстафету лишь 16-й. Ирина Кривко также три раза промахнулась и свой этап завершила на 15-м месте, причем отставание составляло уже более двух минут. Дарья Юркевич сделала два неточных выстрела. Дарья Домрачева приняла эстафету 16-й, стреляла точно и смогла финишировать на 10-м месте. Отставание нашей сборной составило две минуты и семь секунд.'
        },
        {
            id: '7',
            title: 'Российский хоккеист НХЛ хитро реализовал буллит без броска',
            summary: 'Российский форвард «Тампы» Никита Кучеров принес победу своей команде в поединке против «Баффало»,хитро реализовав послематчевый буллит.Ему удалось отправить шайбу в сетку, даже не исполнив броска.',
            createdAt: new Date('2017.03.05 15:07:01'),
            author: 'Репортеров Журналист',
            content: 'Сблизившись с голкипером, Никита Кучеров сделал обманное движение, как будто собираясь переложить шайбу на неудобную сторону крюка, но не стал ее касаться, и снаряд неспешно проскользнул в сетку под не ожидавшим такого трюка шведским вратарем Робином Ленером.'
        },
        {
            id: '8',
            title: 'Ученые нашли животное, которое спит меньше всех',
            summary: 'Дикие африканские слоны спят меньше других млекопитающих — всего два часа в сутки.',
            createdAt: new Date('2017.03.02 15:39:00'),
            author: 'Карп Марина',
            content: 'Считается, что чем крупнее животное, тем меньше времени ему нужно на сон. В эту закономерность не вписывались слоны: судя по наблюдениям в зоопарках, они спят по 4 — 6 часов — аномально много для своих размеров. А вот сон диких слонов долгое время оставался загадкой для ученых.'
        },
        {
            id: '9',
            title: 'Новая версия Opera получила функцию "мгновенной" фоновой загрузки',
            summary: 'В новой версии популярного браузера Opera появилась функция фоновой загрузки веб-страниц с механизмом оптимизации программы компилятором (Profile Guided Optimization), сообщает CNews.',
            createdAt: new Date('2017.02.07 18:49:49'),
            author: 'Иванов Иван',
            content: 'В основе технологии мгновенной загрузки страниц лежит алгоритм, который позволяет браузеру Opera предугадывать, какой веб-сайт пользователь вводит в адресной строке, и начинать загрузку страницы в фоне еще до нажатия клавиши Enter.'
        },
        {
            id: '10',
            title: 'Представлен светящийся смартфон Alcatel A5 и гибридный планшет на Windows 10',
            summary: 'В рамках выставки MWC 2017 компания TCL, более известная в наших краях под брендом Alcatel, представила несколько своих новых смартфонов, а также гибридный планшет на Windows 10.',
            createdAt: new Date('2017.02.27 13:35:00'),
            author: 'Легкая Татьяна',
            content: 'Самой интересной новинкой стала модель A5 LED. Аппарат оснащается несколькими съемными крышками, в одну из которых встроены светодиоды. Они могут мигать в такт проигрываемой на девайсе музыке или свечением оповещать о входящем звонке или сообщении.'
        },
        {
            id: '11',
            title: 'Топ 5 мультфильмов',
            summary: 'Список лучших мультиков',
            createdAt: new Date('2017.03.06 10:40:00'),
            author: 'Крылатов Григорий',
            content: '1.Трое из Простоквашино\n2.Ну, погоди!\n3.Винни Пух идет в гости\n4.Зверополис\n5.Король Лев'
        },
        {
            id: '12',
            title: '«Хаббл» получил снимки самой большой звезды Млечного Пути',
            summary: 'Орбитальная обсерватория «Хаббл» получила фотографии самой большой звезды Галактики - Westerlund 1-26.',
            createdAt: new Date('2017.03.07 14:44:00'),
            author: 'Горыныч',
            content: 'Как сообщает РИА Новости, эта крупная звезда выпускает в космическую среду огромное количество материи. Выбросы Westerlund 1-26 сформировали туманность, которая хорошо заметна для телескопов.'
        },
        {
            id: '13',
            title: 'Австрийский лыжник Хиршер побил рекорд, в шестой раз выиграв Кубок мира ',
            summary: 'Австрийский лыжник Марсель Хиршер стал первым мужчиной, завоевавшим шесть Кубков мира в лыжном спорте. ',
            createdAt: new Date('2017.03.05 14:44:00'),
            author: 'Хишер Марсель',
            content: 'Шестой "Хрустальный глобус" ему принесла победа на гигантском слаломе в гонке на словенской Краньска-Горе.Предыдущий рекорд - пять Кубков мира - 28-летний австриец делил с люксембуржцем Марком Жирарделли, выступавшим в 1980-90-е.Второе место в субботней гонке в Словении занял норвежец Лейф Кристиан Хауген, третьим же стал шведский спортсмен Маттс Ольссон.'
        },
        {
            id: '14',
            title: 'Шарапова готовится к возвращению',
            summary: 'После матчей за свои страны теннисисты вернулись к личным турнирам.',
            createdAt: new Date('2017.02.10 16:16:16'),
            author: 'Донцова Арина',
            content: 'Мария Шарапова в данный момент тренируется в академии Ника Боллетьери. Россиянка готовится к возвращению на апрельском турнире в Штутгарте.'
        },
        {
            id: '15',
            title: 'Ученые назвали самые полезные виды спорта',
            summary: 'Для того, чтобы выяснить, какой именно вид спорта полезен ученые из Австралии решили провести наблюдения за 80 тысячами именно пожилых британцев и австралийцев.',
            createdAt: new Date('2016.11.05 10:44:00'),
            author: 'Веленгурин Владимир',
            content: 'По словам Эммануэль Стаматакис из университета Сиднея, в фаворитах оказались три вида: бадминтон, теннис и сквош (игра в теннис со стенкой). Благодаря этим занятием вероятность преждевременной смерти от проблем с сердцем и сосудами снизилась на 56 процентов. Занятия плаванием и аэробикой снижали эту вероятность 36-41 процент, а велоспортом - на 15 процентов.'
        },
        {
            id: '16',
            title: 'Вся правда о бутилированной воде',
            summary: 'Вся бутилированная вода делится на питьевую и минеральную.',
            createdAt: new Date('2015.04.10 14:50:00'),
            author: 'Полюдов Дмитрий',
            content: 'Питьевая черпается как из наземных, так и из подземных источников, а также из централизованных систем водоснабжения (практически из-под крана). Но прежде чем попасть на прилавки супермаркетов, питьевая вода проходит тщательную химическую или физическую (фильтрация песком или активированным углем) обработку. Содержание микроэлементов — не более 1 грамма на литр.'
        },
        {
            id: '17',
            title: 'Съел, и голова не болит: еда от головной боли',
            summary: 'Еда – не просто топливо для организма. Каждый продукт – это химическая лаборатория. И в некоторых из них точно есть то, что нам может помочь от головной боли.',
            createdAt: new Date('2017.02.24 23:25:00'),
            author: 'Каровай Руслан',
            content: 'Доказано, что магний облегчает приступы головной боли, связанные с сужением кровеносных сосудов. Магний действует на сосуды расслабляюще, что улучшает кровообращение в головном мозге и, как следствие – насыщает клетки мозга кислородом. Если вам обычно от головной боли хорошо помогают препараты типа но-шпы (дротаверина), попробуйте съесть что-то из продуктов с высоким содержанием магния.'
        },
        {
            id: '18',
            title: 'Продукт недели: сельдерей',
            summary: 'В Россию этот овощ попал при императрице Екатерине II, в то время он играл роль декоративного ароматического растения.',
            createdAt: new Date('2017.01.05 15:44:00'),
            author: 'Чаплин Чарли',
            content: 'Сельдерей существует клубневой, черешковый и зеленый, с пышной листвой и зеленью. Каждый вид нашел свое место в кулинарии. При засолке овощей используют исключительно мелко нарезанный клубень, но не листву, а вот в супах, напротив, предпочитают для аромата сельдерей листовой или черешковый.'
        },
        {
            id: '19',
            title: 'Самые необычные отели мира',
            summary: 'Переночевать в пещере или провести ночь на высоте 17 м в кабине портового крана. Туристов по всему миру все чаще удивляют не только памятниками культуры или природы, но и отелями',
            createdAt: new Date('2017.03.01 11:14:10'),
            author: 'Иванов Иван',
            content: 'В шведской деревне Юккасарви функционирует ледяной отель — Icehotel. Для комфортного пребывания гостям выдается теплая одежда (комбинезоны, ботинки, перчатки и балаклавы), спальные мешки. Температура комнат поддерживается на уровне от -5C до -7C. Помимо «холодных» номеров, на территории расположена церковь, бар, ресторан, лаундж-зоны и отапливаемые комнаты. Администрация отеля рекомендует бронировать одну ночь в холодном номере и пару ночей в теплом помещении'
        },
        {
            id: '20',
            title: 'Все, что вы хотели знать о безрамном внедорожнике ',
            summary: 'Новый Land Rover Discovery - это не просто очередная смена поколений. Это - важное послание прогрессивному автомобильному сообществу и смелый вызов консервативному джиперскому братству. ',
            createdAt: new Date('2016.11.12 13:14:15'),
            author: 'Селезнев Андрей',
            content: 'Все вопросы, связанные с поведением Discovery на разных типах дорог и бездорожья, приводят к рассказу о самом главном изменении в автомобиле. Итак, пятое поколение получило несущий кузов, причем кузов очень легкий. Он на 85% сделан из алюминия, сталь использована только для подрамников и дверей, да еще рамка радиатора сделана из магниевого сплава. В результате Discovery V получился очень легким, сбросив сразу 480 килограммов по сравнению с предшественником.'
        }
    ];
    function compareDates(a, b){
        return b.createdAt - a.createdAt;
    }
    function getArticles(skip = 0, top = 6, filtItem) {
        if (typeof(skip) === "number" && typeof(top) === "number") {
            articles.sort(compareDates);
            if(filtItem) {
                var mas = null;
                if (filtItem.author) {
                    mas = articles.filter(function (obj) {
                        return (obj.author.toLowerCase() === filtItem.author.toLowerCase());
                    });
                }
                if (filtItem.from) {
                    var dateIn = new Date(filtItem.from);   //с какой даты
                    var dateOut;   //по какую дату
                    if(filtItem.upTo)
                        dateOut = new Date (filtItem.upTo);
                    else
                        dateOut = new Date();
                    if (mas) {
                        mas = mas.filter(function (ob) {
                            return ((ob.createdAt - dateIn >= 0) && (dateOut - ob.createdAt >= 0));
                        });
                    }
                    else {
                        mas = articles.filter(function (o) {
                            return  ((o.createdAt - dateIn >= 0) && (dateOut - o.createdAt >= 0));
                        });
                    }
                }
                if(mas)
                    return mas.slice(skip, skip + top);
            }
            return articles.slice(skip, skip + top);
        }
    }

    function getArticle(id = articles[0].id){
        for(var i = 0; i < articles.length; i++){
            if(articles[i].id == id)
                return articles[i];
        }
    }
    function validateArticle(article){
        if(article.id === undefined || article.title === undefined || article.summary === undefined
            || article.createdAt === undefined || article.author === undefined || article.content === undefined)
            return false;
        if(typeof(article.id) !== "string" || typeof(article.title) !== "string" || typeof(article.summary) !== "string" || typeof(article.author) !== "string" || typeof(article.content) !== "string")
            return false;
        if(article.title.length >= 100 || article.summary.length >= 200)
            return false;
        if(article.author.length == 0 || article.content.length == 0)
            return false;
        else
            return true;
    }

    function addArticle(article){
        if(validateArticle(article) == true && getIndex(article.id) == null)
        {
            var d = new Date(article.createdAt);
            article.createdAt = d;
            articles.push(article);
            articles.sort(compareDates);
            return true;
        }
        else
            return false;
    }
    function editArticle(id, article){
        var temp = getArticle(id);
        if(temp) {
            if (article.title)
                temp.title = article.title;
            if (article.summary)
                temp.summary = article.summary;
            if (article.content)
                temp.content = article.content;
        }
        return validateArticle(temp);
    }

    function getIndex(id){
        /*return articles.findIndex(function(item){
         return item.id == id;
         });*/
        for(var i = 0; i < articles.length; i++){
            if(articles[i].id == id)
                return i;
        }
        return null;
    }
    function removeArticle(id){
        var numb = getIndex(id);
        if (numb!= null)
        {
            articles.splice(numb, 1);
            return true;
        }
        else
            return false;
    }
    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle
    };
}());
///////////////////////////////////////////////////////////////////
var visualizator = (function() {
    var ARTICLE_TEMPLATE;
    var listOfArticles;
    var USER = null;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector("#template-article");
        listOfArticles = document.querySelector(".left-column");
    }

    function visualizeArticle(article) {
        var temp = ARTICLE_TEMPLATE;
        temp.content.querySelector(".article").id = article.id;
        temp.content.querySelector(".title").textContent = article.title;
        temp.content.querySelector(".time").textContent = formatTime(article.createdAt);
        temp.content.querySelector(".summary").textContent = article.summary;
        temp.content.querySelector(".date").textContent = formatDate(article.createdAt);
        temp.content.querySelector(".author").textContent = article.author;
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
        return data.getHours() + ":" + data.getMinutes();
    }

    function formatDate(data) {
        return data.getDate() + "." + (data.getMonth() + 1) + "." + data.getFullYear();
    }

    function clearDOM() {
        listOfArticles.innerHTML = "";
    }
    function insretArticle(article){
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
                if (article.title)
                    q.querySelector(".title").textContent = article.title;
                if (article.summary)
                    q.querySelector(".summary").textContent = article.summary;
            }
            return true;
        }
        return false;
    }
    function removeArticle(id){
        if(articleModel.removeArticle(id) == true){
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
        var you = document.querySelector(".user");
        USER = name;
        you.textContent = name;
        if(USER){
            document.querySelector(".sign").textContent = "Выход";
            document.querySelector(".create").hidden = false;
        }
        else {
            document.querySelector(".sign").textContent = "Вход";
            document.querySelector(".create").hidden = true;
        }
    }
    return{
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        clearDOM: clearDOM,
        insretArticle: insretArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        changeUser: changeUser
    }
}());

document.addEventListener('DOMContentLoaded', startApp);
function startApp(){
    visualizator.init();
    displayArticles();
    addArticle({id : "55", author:"Линкольн Авраам", summary:"Переночевать в пещере или провести ночь на высоте 17 м в кабине портового крана. Туристов по всему миру все чаще удивляют не только", title:"Весна",createdAt:'02.04.2017', content:"4545sdd"});
    editArticle("12", {title: "ttttttttttttttttttaaaa", summary: "aaa", content: "tttt"});
    removeArticle('12');
    userChange("Sunny");
}
function displayArticles(skip=0, top=6){
    visualizator.clearDOM();
    visualizator.insertArticlesInDOM(articleModel.getArticles(skip, top));
}
function addArticle(article){   //Вставить нововсть
    if(visualizator.insretArticle(article)) {
        return true;
    }
    else
        return false;
}
function editArticle(id, article){   //Править новость
    return visualizator.editArticle(id,article);
}
function removeArticle(id){  //Удалить новость
    if(visualizator.removeArticle(id)) {
        return true;
    }
    else
        return false;
}
function userChange(name){   //если значене null, то пользователя нет
    visualizator.changeUser(name);
}