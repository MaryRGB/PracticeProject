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
            author: 'Карп Марина',
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
            title: 'Российский хоккеист НХЛ хитро реализовал буллит без броска.',
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
    var articleAmount = 20;
    var latestFilter;
    var loggedUsers = [
        {
            login: 'MaryRGB',
            password: 'qwerty123'
        },
        {
            login: 'Муромец Илья',
            password: 'богатырь'
        },
        {
            login: 'Бонд Джеймс',
            password: '007БД'
        }
    ];

    function compareDates(a, b){
        return b.createdAt - a.createdAt;
    }
    function getForStorage(){
        return articles;
    }
    function setFromStorage(art){
        articles = art;
    }
    function getArticles(skip = 0, top = 6, filtItem = latestFilter) {
        if (typeof(skip) === "number" && typeof(top) === "number") {
            articles.sort(compareDates);
            if(filtItem) {
                var mas = null;
                if (filtItem.author) {
                    mas = articles.filter(function (obj) {
                        return (obj.author.toLowerCase() === filtItem.author.toLowerCase());
                    });
                }
                if(filtItem.from || filtItem.upTo) {
                    var dateIn;   //с какой даты
                    var dateOut;   //по какую дату
                    if (filtItem.from)
                        dateIn = new Date(filtItem.from);
                    else
                        dateIn = new Date("01.01.0001");
                    if (filtItem.upTo)
                        dateOut = new Date(filtItem.upTo);
                    else
                        dateOut = new Date();
                    if (mas) {
                        mas = mas.filter(function (ob) {
                            return ((ob.createdAt - dateIn >= 0) && (dateOut - ob.createdAt >= 0));
                        });
                    }
                    else {
                        mas = articles.filter(function (o) {
                            return ((o.createdAt - dateIn >= 0) && (dateOut - o.createdAt >= 0));
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
        if(!article.title || !article.summary|| !article.createdAt || !article.author || !article.content)
            return false;
        if(typeof(article.title) !== "string" || typeof(article.summary) !== "string" || typeof(article.author) !== "string" || typeof(article.content) !== "string")
            return false;
        if(article.title.length >= 100 || article.summary.length >= 200)
            return false;
        if(article.author.length == 0 || article.content.length == 0)
            return false;
        else
            return true;
    }

    function addArticle(article){
        if(validateArticle(article) == true){
            articleAmount = articleAmount+1;
            article.id = articleAmount;
            var d = new Date();
            article.createdAt = d;
            articles.push(article);
            articles.sort(compareDates);
            return true;
        }
        else
            return false;
    }
    function editArticle(article){
        var temp = getArticle(article.id);
        var clone={};
        for(var i in temp)
            clone[i] = temp[i];
        if(temp) {
            temp.title = article.title;
            temp.summary = article.summary;
            temp.content = article.content;
        }
        if(validateArticle(temp) === false) {
            for(var i in clone)
                temp[i] = clone[i];
            return false;
        }
        else{
            return true;
        }
    }

    function getIndex(id){
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
    function findUser(user){
        return loggedUsers.find(function(obj){
            return (obj.login === user.login & obj.password === user.password);
        });
    }
    function getArticleAmount(filtConf){
        latestFilter = filtConf;
        return articleAmount;
    }
    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        findUser: findUser,
        getArticleAmount: getArticleAmount,
        getForStorage: getForStorage,
        setFromStorage: setFromStorage
    };
}());

//Работа с DOM///////////////////////////////////////
var visualizator = (function() {
    var ARTICLE_TEMPLATE;
    var listOfArticles;
    var oneArticle;
    var USER = null;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector("#template-article");
        listOfArticles = document.querySelector(".left-column");
        oneArticle=document.querySelector(".body");
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
        return (((data.getHours() < 10)? '0'+data.getHours():data.getHours()) + ":" + ((data.getMinutes() < 10)? '0'+data.getMinutes():data.getMinutes()));
    }

    function formatDate(data) {
        return (((data.getDate() < 10)? ('0'+data.getDate()):(data.getDate())) +
        "." + ((data.getMonth() <= 8)? ('0'+(data.getMonth()+1)):(data.getMonth()+1)) + "." + data.getFullYear());
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
                q.querySelector(".title").textContent = article.title;
                q.querySelector(".summary").textContent = article.summary;
                q.querySelector(".plot").textContent = article.content;
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
        var you = document.querySelector("#user");
        USER = name;
        you.textContent = name;
        if(USER){
            document.querySelector("#sign").textContent = "Выход";
            document.querySelector(".create").style = "display:inline-block;";
            document.querySelector("#user").style = "display:inline-block;";
            document.querySelector(".delete").style = "display:inline-block;";
            document.querySelector(".edit").style = "display:inline-block;";
            document.querySelector("#user").textContent = name;
        }
        else {
            document.querySelector("#sign").textContent = "Вход";
            document.querySelector(".create").style = "display:none;";
            document.querySelector("#user").style = "display:none;";
            document.querySelector(".delete").style = "display:none;";
            document.querySelector(".edit").style = "display:none;";
        }
    }
    function openArt(id) {
        var temporary = articleModel.getArticle(id);
        var temp = document.querySelector(".news");
        temp.id = id;
        temp.querySelector(".hat").textContent =temporary.title;
        temp.querySelector(".time-date").textContent =formatDate(temporary.createdAt) +' '+formatTime(temporary.createdAt);
        temp.querySelector(".written-by").textContent ='Автор: '+ temporary.author;
        temp.querySelector(".plot").textContent = temporary.content;
    }
    function displayAE(id){
        var art;
        var ae = document.querySelector(".add-edit");
        if(art=articleModel.getArticle(id)){
            ae.querySelector(".in-name").value = art.title;
            ae.querySelector(".in-summary").value = art.summary;
            ae.querySelector(".in-content").value = art.content;
            ae.querySelector(".name-id-article").textContent = art.id;
            ae.querySelector(".name-who-wrote").textContent = art.author;
            ae.querySelector(".name-date-write").textContent = formatDate(art.createdAt)+' '+formatTime(art.createdAt);
        }
        else {
            ae.querySelector(".in-name").value = "";
            ae.querySelector(".in-summary").value = "";
            ae.querySelector(".in-content").value = "";
            ae.querySelector(".name-id-article").textContent = "";
            ae.querySelector(".name-who-wrote").textContent = USER;
            ae.querySelector(".name-date-write").textContent = formatDate(new Date())+formatTime(new Date);
        }
    }
    function clearSign(){
        var ae = document.querySelector(".authorization");
        ae.querySelector(".user-name").value = "";
        ae.querySelector(".password").value = "";
    }
    return{
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        clearDOM: clearDOM,
        insretArticle: insretArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        changeUser: changeUser,
        openArt: openArt,
        displayAE: displayAE,
        clearSign: clearSign
    }
}());

document.addEventListener('DOMContentLoaded', startApp);
function startApp(){
    if(!localStorage.getItem("articles")){
        var articlesString = JSON.stringify(articleModel.getForStorage());
        localStorage.setItem("articles", articlesString);
    }
    else{
        var articleString2 = localStorage.getItem("articles");
        articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
            if(key == "createdAt")
                return new Date(value);
            return value;
        }));
    }
    visualizator.init();

    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConfig){
        visualizator.clearDOM();

        var showMoreParams = showMore.init(articleModel.getArticleAmount(filterConfig), displayArticles);
        displayArticles(showMoreParams.skip, showMoreParams.top, filterConfig);
    }
}

function displayArticles(skip=0, top=6, filterConfig){

    visualizator.insertArticlesInDOM(articleModel.getArticles(skip, top, filterConfig));
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
function openArticle(id) {
    document.querySelector(".left-column").style = "display:none;";
    document.querySelector(".right-column").style = "display:none;";
    document.querySelector(".show-more").style = "display:none;";
    visualizator.openArt(id);
    document.querySelector(".news").style = "display:block;";
}

function formToAE(type, id){
    if (type === 'edit') {
        document.querySelector(".news").style = "display:none;";
        visualizator.displayAE(id);
        document.querySelector(".add-edit").style="display:block;";
    }
    else{
        document.querySelector(".news").style = "display:none;";
        document.querySelector(".left-column").style = "display:none;";
        document.querySelector(".right-column").style = "display:none;";
        document.querySelector(".show-more").style = "display:none;";
        document.querySelector(".error").style = "display:none;";
        visualizator.displayAE(id);
        document.querySelector(".add-edit").style="display:block;";
    }
}
function saveEveryThing(newArticle){
    if(newArticle.id){
        if(!visualizator.editArticle(newArticle)) {
            document.querySelector(".add-edit").style = "display:none;";
            showError();
            return false;
        }
    }
    else{
        if(!articleModel.addArticle(newArticle)) {
            document.querySelector(".add-edit").style = "display:none;";
            showError();
            return false;
        }
    }
    return true;
}
function showError(){
    document.querySelector(".error").style = "display:block;";
    visualizator.clearDOM();
    filter.reset();
    var showMoreParams = showMore.reset();
    displayArticles(showMoreParams.skip, showMoreParams.top);
    document.querySelector(".show-more").style = "display:none;";
}

var articleListNode = document.querySelector('.left-column');
articleListNode.addEventListener('click',handleOpen);

function handleOpen(event){  //Просмотр новости
    var articleString2 = localStorage.getItem("articles");
    articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
        if(key == "createdAt")
            return new Date(value);
        return value;
    }));
    var target = event.target;
    while(target.getAttribute('class') !== 'article') {
        target = target.parentNode;
    }
    if (target.getAttribute('class') === 'article')
        openArticle(target.getAttribute('id'));
    else
        return;
}

var bodyNode = document.querySelector('body');
bodyNode.addEventListener('click',handleBack);
bodyNode.addEventListener('click',handleDelete);
bodyNode.addEventListener('click',handleAddEdit);
bodyNode.addEventListener('click',handleSave);

function handleBack(event){   //Возврат на главную страницу
    var articleString2 = localStorage.getItem("articles");
    articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
        if(key == "createdAt")
            return new Date(value);
        return value;
    }));
    var target = event.target;
    if (target.getAttribute('class') === 'back-to-main'){
        document.querySelector(".left-column").style = "display:inline-block;";
        document.querySelector(".right-column").style = "display:inline-block;";
        document.querySelector(".show-more").style = "display:block;";
        document.querySelector(".news").style = "display:none;";
        document.querySelector(".add-edit").style = "display:none;";
        document.querySelector(".error").style = "display:none;";
        document.querySelector(".authorization").style = "display:none;";
    }
    else
        return;
}
function handleDelete(event){   //Удаление новости
    var target = event.target;
    if (target.getAttribute('class') === 'delete') {
        if (confirm('Вы действийтельно хотите удалить эту новость?')) {
            var articleString2 = localStorage.getItem("articles");
            articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
                if(key == "createdAt")
                    return new Date(value);
                return value;
            }));

            removeArticle(target.parentNode.getAttribute('id'));
            visualizator.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            document.querySelector(".news").style = "display:none;";
            document.querySelector(".left-column").style = "display:inline-block;";
            document.querySelector(".right-column").style = "display:inline-block;";

            var articlesString1 = JSON.stringify(articleModel.getForStorage());
            localStorage.setItem("articles", articlesString1);
        }
    }
    else
        return;
}
function handleAddEdit(event){   //Редактирование/добавление
    var articleString2 = localStorage.getItem("articles");
    articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
        if(key == "createdAt")
            return new Date(value);
        return value;
    }));
    var target = event.target;
    if (target.getAttribute('class') === 'edit'|target.getAttribute('class') === "create"| target.getAttribute('class') === "add"){
        formToAE(target.getAttribute("class"), target.parentNode.getAttribute('id'));
    }
    else
        return;
}
function handleSave(event){   //Обработка кнопки сохранить для редактирования/добавления
    var target = event.target;
    var parent = target.parentNode;
    if (target.getAttribute('class') === 'save'){
        var articleString2 = localStorage.getItem("articles");
        articleModel.setFromStorage( JSON.parse(articleString2, function(key, value){
            if(key == "createdAt")
                return new Date(value);
            return value;
        }));
        var newArticle ={
            title: parent.querySelector(".in-name").value,
            summary: parent.querySelector(".in-summary").value,
            content: parent.querySelector(".in-content").value,
            id:parent.querySelector(".name-id-article").textContent,
            createdAt: parent.querySelector(".name-date-write").textContent,
            author:parent.querySelector(".name-who-wrote").textContent
        };
        if(saveEveryThing(newArticle)) {
            document.querySelector(".add-edit").style = "display:none;";
            visualizator.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            openArticle(newArticle.id);
        }
        var articlesString1 = JSON.stringify(articleModel.getForStorage());
        localStorage.setItem("articles", articlesString1);
    }
    else
        return;
}

var headNode = document.querySelector('#head');
headNode.addEventListener('click',handleSign);

function handleSign(event){   //Обработка кнопки вход
    var target = event.target;
    if(target.textContent ==="Вход") {
        document.querySelector(".authorization").style = "display:block;";
        document.querySelector(".left-column").style = "display:none;";
        document.querySelector(".right-column").style = "display:none;";
        document.querySelector(".news").style = "display:none;";
        document.querySelector(".show-more").style = "display:none;";
        document.querySelector(".error").style = "display:none;";
        visualizator.clearSign();
    }
    if(target.textContent ==="Выход") {
        document.querySelector(".left-column").style = "display:inline-block;";
        document.querySelector(".right-column").style = "display:inline-block;";
        document.querySelector(".news").style = "display:none;";
        document.querySelector(".authorization").style = "display:none;";
        visualizator.clearDOM();
        filter.reset();
        var showMoreParams = showMore.reset();
        displayArticles(showMoreParams.skip, showMoreParams.top);
        userChange();
    }
}

bodyNode.addEventListener('click',handleSignIN);
function handleSignIN(event){   //Попытка авторизации
    var target = event.target;
    if(target.textContent ==="Войти") {
        var person = {
            login: target.parentNode.querySelector(".user-name").value,
            password: target.parentNode.querySelector(".password").value,
        }
        if(articleModel.findUser(person)){
            userChange(person.login);
            visualizator.clearDOM();
            filter.reset();
            var showMoreParams = showMore.reset();
            displayArticles(showMoreParams.skip, showMoreParams.top);
            document.querySelector(".left-column").style = "display:inline-block;";
            document.querySelector(".right-column").style = "display:inline-block;";
            document.querySelector(".authorization").style = "display:none;";
        }
        else{
            document.querySelector(".authorization").style = "display:none;";
            showError();
        }

    }
    else
        return;
}

var showMore = (function(){   //Реализация "показать ещё"
    var total;
    var PER_PAGE = 6;
    var currentPage = 1;
    var PAGINATION_BUTTON;
    var callBack;

    PAGINATION_BUTTON = document.querySelector(".show-more");
    PAGINATION_BUTTON.addEventListener("click", handleShowMoreClick);

    function init(amount, CB){
        currentPage = 1;
        total = amount;
        callBack = CB;
        hideShowPagination();
        return getParams();
    }
    function handleShowMoreClick(event){
        if(event.target.getAttribute('class') === 'show-more') {
            var paginationParams = nextPage();
            callBack(paginationParams.skip, paginationParams.top);
        }
    }
    function getParams(){
        return{
            top: PER_PAGE,
            skip: (currentPage - 1)*PER_PAGE
        };
    }
    function getCurrentTotal(){
        return Math.ceil(total/PER_PAGE);
    }
    function nextPage(){
        currentPage = currentPage + 1;
        hideShowPagination();
        return getParams();
    }
    function hideShowPagination(){
        if(getCurrentTotal() <= currentPage){
            PAGINATION_BUTTON.style = "display: none;";
        }
        else{
            PAGINATION_BUTTON.style = "display: block;";
        }
    }
    function reset(){
        currentPage = 1;
        hideShowPagination();
        return getParams();
    }
    return{
        init: init,
        reset: reset
    }

}());

var filter = (function(){   //Фильтр
    var FORM;
    var FILT_BUTTON;
    var filterCallBack;
    FORM = document.querySelector(".filter");
    FILT_BUTTON = document.querySelector(".filt");
    FILT_BUTTON.addEventListener("click", handleFiltClick);

    function init(filtCB){
        filterCallBack = filtCB;
        return getFilter();
    }
    function getFilter(){
        var authorSelect = FORM.querySelector(".in1").value;
        var fromSelect = FORM.querySelector(".in2").value;
        var upTOSelect = FORM.querySelector(".in3").value;

        return{
            author: authorSelect,
            from: fromSelect,
            upTo: upTOSelect
        }
    }
    function handleFiltClick(event){
        return filterCallBack(getFilter());
    }
    function reset(){
        articleModel.getArticleAmount(
            {
                author: FORM.querySelector(".in1").value = "",
                from: FORM.querySelector(".in2").value = "",
                upTo: FORM.querySelector(".in3").value = ""
            });
    }
    return{
        init: init,
        getFilterConfig: getFilter(),
        reset: reset
    }
}());

/*var articlesString1 = JSON.stringify(articles);
localStorage.setItem("articles", articlesString1);
var articleString2 = localStorage.getItem("articles");
var articles = JSON.parse(articleString2, function(key, value){
    if(key == "createdAt")
        return new Date(value);
    return value;
});*/