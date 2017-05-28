let articles = [
    {
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017.02.27 23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        exist: true,
    },
    {
        id: '2',
        title: 'Прыгун в высоту принес Беларуси третью медаль на ЧЕ-2017',
        summary: '20-летний Павел Селиверстов принес Беларуси третью медаль на ЧЕ по легкой атлетике в помещении.',
        createdAt: new Date('2017.03.05 20:20:00'),
        author: 'Селезнев Андрей',
        content: 'Лучшим результатом белоруса стала высота 2,27 м, и этого показателя хватило для бронзовой награды. Павел Селиверстов по меньшему числу попыток опередил еще трех соперников, также преодолевших 2,27 м — болгарина Тихомира Иванова, словака Матуша Бубеника и итальянца Сильвано Кьезани.',
        exist: true,
    },
    {
        id: '3',
        title: 'Выявлена причина гибели последних мамонтов на Земле',
        summary: 'Биологи из Калифорнийского университета в Беркли (США) назвали причину исчезновения мамонтов.',
        createdAt: new Date('2017.01.11 08:20:15'),
        author: 'Кузнецов Петя',
        content: 'Изолированная популяция карликового подвида шерстистых мамонтов (вид Mammuthus primigenius), проживавшего несколько тысяч лет назад на острове Врангеля, «накопила» слишком много вредных мутаций. Речь идет о потере множества обонятельных рецепторов, а также изменениях в активности генов, отвечающих за выбор партнера и положение в социальной иерархии.',
        exist: true,
    },
    {
        id: '4',
        title: 'Новый флагман Sony назван лучшим смартфоном MWC-2017',
        summary: 'На выставке MWC-2017 свои новинки показали многие мировые бренды.',
        createdAt: new Date('2017.01.11 10:20:15'),
        author: 'Селезнев Андрей',
        content: 'Изолированная популяция карликового подвида шерстистых мамонтов (вид Mammuthus primigenius), проживавшего несколько тысяч лет назад на острове Врангеля, «накопила» слишком много вредных мутаций. Речь идет о потере множества обонятельных рецепторов, а также изменениях в активности генов, отвечающих за выбор партнера и положение в социальной иерархии.',
        exist: true,
    },
    {
        id: '5',
        title: 'Фестивалем "Рыцарство на все времена" Минск начал праздновать 950-летие',
        summary: 'У городской Ратуши прошел фестиваль «Рыцарство на все времена».',
        createdAt: new Date('2017-03-05T20:20:00'),
        author: 'Карп Марина',
        content: 'Битва на Немиге стала первым летописным упоминанием Минска. Упоминание датировано 3 марта 1067 года. Именно этот день принят за день рождения Минска, хотя День города белорусская столица отмечает в сентябре. 3 марта 2017 года у городской Ратуши прошел фестиваль «Рыцарство на все времена». Он начал серию еженедельных выступлений и исторических реконструкций в центре города.',
        exist: true,
    },
    {
        id: '6',
        title: 'Белорусские биатлонистки заняли 10-е место в эстафете на этапе Кубка мира',
        summary: 'Женская сборная Беларуси по биатлону заняла десятое место в эстафете на этапе Кубка мира в южнокорейском Пхенчхане.',
        createdAt: new Date('2016.10.25 15:34:22'),
        author: 'Медов Дмитрий',
        content: 'С самого начала гонка для нашей команды складывалась не лучшим образом. Надежда Скардино трижды прибегнула к дополнительным патронам и передала эстафету лишь 16-й. Ирина Кривко также три раза промахнулась и свой этап завершила на 15-м месте, причем отставание составляло уже более двух минут. Дарья Юркевич сделала два неточных выстрела. Дарья Домрачева приняла эстафету 16-й, стреляла точно и смогла финишировать на 10-м месте. Отставание нашей сборной составило две минуты и семь секунд.',
        exist: true,
    },
    {
        id: '7',
        title: 'Российский хоккеист НХЛ хитро реализовал буллит без броска.',
        summary: 'Российский форвард «Тампы» Никита Кучеров принес победу своей команде в поединке против «Баффало»,хитро реализовав послематчевый буллит.Ему удалось отправить шайбу в сетку, даже не исполнив броска.',
        createdAt: new Date('2017.03.05 15:07:01'),
        author: 'Репортеров Журналист',
        content: 'Сблизившись с голкипером, Никита Кучеров сделал обманное движение, как будто собираясь переложить шайбу на неудобную сторону крюка, но не стал ее касаться, и снаряд неспешно проскользнул в сетку под не ожидавшим такого трюка шведским вратарем Робином Ленером.',
        exist: true,
    },
    {
        id: '8',
        title: 'Ученые нашли животное, которое спит меньше всех',
        summary: 'Дикие африканские слоны спят меньше других млекопитающих — всего два часа в сутки.',
        createdAt: new Date('2017.03.02 15:39:00'),
        author: 'Карп Марина',
        content: 'Считается, что чем крупнее животное, тем меньше времени ему нужно на сон. В эту закономерность не вписывались слоны: судя по наблюдениям в зоопарках, они спят по 4 — 6 часов — аномально много для своих размеров. А вот сон диких слонов долгое время оставался загадкой для ученых.',
        exist: true,
    },
    {
        id: '9',
        title: 'Новая версия Opera получила функцию "мгновенной" фоновой загрузки',
        summary: 'В новой версии популярного браузера Opera появилась функция фоновой загрузки веб-страниц с механизмом оптимизации программы компилятором (Profile Guided Optimization), сообщает CNews.',
        createdAt: new Date('2017.02.07 18:49:49'),
        author: 'Иванов Иван',
        content: 'В основе технологии мгновенной загрузки страниц лежит алгоритм, который позволяет браузеру Opera предугадывать, какой веб-сайт пользователь вводит в адресной строке, и начинать загрузку страницы в фоне еще до нажатия клавиши Enter.',
        exist: true,
    },
    {
        id: '10',
        title: 'Представлен светящийся смартфон Alcatel A5 и гибридный планшет на Windows 10',
        summary: 'В рамках выставки MWC 2017 компания TCL, более известная в наших краях под брендом Alcatel, представила несколько своих новых смартфонов, а также гибридный планшет на Windows 10.',
        createdAt: new Date('2017.02.27 13:35:00'),
        author: 'Легкая Татьяна',
        content: 'Самой интересной новинкой стала модель A5 LED. Аппарат оснащается несколькими съемными крышками, в одну из которых встроены светодиоды. Они могут мигать в такт проигрываемой на девайсе музыке или свечением оповещать о входящем звонке или сообщении.',
        exist: true,
    },
    {
        id: '11',
        title: 'Топ 5 мультфильмов',
        summary: 'Список лучших мультиков',
        createdAt: new Date('2017.03.06 10:40:00'),
        author: 'Крылатов Григорий',
        content: '1.Трое из Простоквашино\n2.Ну, погоди!\n3.Винни Пух идет в гости\n4.Зверополис\n5.Король Лев',
        exist: true,
    },
    {
        id: '12',
        title: '«Хаббл» получил снимки самой большой звезды Млечного Пути',
        summary: 'Орбитальная обсерватория «Хаббл» получила фотографии самой большой звезды Галактики - Westerlund 1-26.',
        createdAt: new Date('2017.03.07 14:44:00'),
        author: 'Горыныч',
        content: 'Как сообщает РИА Новости, эта крупная звезда выпускает в космическую среду огромное количество материи. Выбросы Westerlund 1-26 сформировали туманность, которая хорошо заметна для телескопов.',
        exist: true,
    },
    {
        id: '13',
        title: 'Австрийский лыжник Хиршер побил рекорд, в шестой раз выиграв Кубок мира ',
        summary: 'Австрийский лыжник Марсель Хиршер стал первым мужчиной, завоевавшим шесть Кубков мира в лыжном спорте. ',
        createdAt: new Date('2017.03.05 14:44:00'),
        author: 'Хишер Марсель',
        content: 'Шестой "Хрустальный глобус" ему принесла победа на гигантском слаломе в гонке на словенской Краньска-Горе.Предыдущий рекорд - пять Кубков мира - 28-летний австриец делил с люксембуржцем Марком Жирарделли, выступавшим в 1980-90-е.Второе место в субботней гонке в Словении занял норвежец Лейф Кристиан Хауген, третьим же стал шведский спортсмен Маттс Ольссон.',
        exist: true,
    },
    {
        id: '14',
        title: 'Шарапова готовится к возвращению',
        summary: 'После матчей за свои страны теннисисты вернулись к личным турнирам.',
        createdAt: new Date('2017.02.10 16:16:16'),
        author: 'Донцова Арина',
        content: 'Мария Шарапова в данный момент тренируется в академии Ника Боллетьери. Россиянка готовится к возвращению на апрельском турнире в Штутгарте.',
        exist: true,
    },
    {
        id: '15',
        title: 'Ученые назвали самые полезные виды спорта',
        summary: 'Для того, чтобы выяснить, какой именно вид спорта полезен ученые из Австралии решили провести наблюдения за 80 тысячами именно пожилых британцев и австралийцев.',
        createdAt: new Date('2016.11.05 10:44:00'),
        author: 'Веленгурин Владимир',
        content: 'По словам Эммануэль Стаматакис из университета Сиднея, в фаворитах оказались три вида: бадминтон, теннис и сквош (игра в теннис со стенкой). Благодаря этим занятием вероятность преждевременной смерти от проблем с сердцем и сосудами снизилась на 56 процентов. Занятия плаванием и аэробикой снижали эту вероятность 36-41 процент, а велоспортом - на 15 процентов.',
        exist: true,
    },
    {
        id: '16',
        title: 'Вся правда о бутилированной воде',
        summary: 'Вся бутилированная вода делится на питьевую и минеральную.',
        createdAt: new Date('2015.04.10 14:50:00'),
        author: 'Полюдов Дмитрий',
        content: 'Питьевая черпается как из наземных, так и из подземных источников, а также из централизованных систем водоснабжения (практически из-под крана). Но прежде чем попасть на прилавки супермаркетов, питьевая вода проходит тщательную химическую или физическую (фильтрация песком или активированным углем) обработку. Содержание микроэлементов — не более 1 грамма на литр.',
        exist: true,
    },
    {
        id: '17',
        title: 'Съел, и голова не болит: еда от головной боли',
        summary: 'Еда – не просто топливо для организма. Каждый продукт – это химическая лаборатория. И в некоторых из них точно есть то, что нам может помочь от головной боли.',
        createdAt: new Date('2017.02.24 23:25:00'),
        author: 'Каровай Руслан',
        content: 'Доказано, что магний облегчает приступы головной боли, связанные с сужением кровеносных сосудов. Магний действует на сосуды расслабляюще, что улучшает кровообращение в головном мозге и, как следствие – насыщает клетки мозга кислородом. Если вам обычно от головной боли хорошо помогают препараты типа но-шпы (дротаверина), попробуйте съесть что-то из продуктов с высоким содержанием магния.',
        exist: true,
    },
    {
        id: '18',
        title: 'Продукт недели: сельдерей',
        summary: 'В Россию этот овощ попал при императрице Екатерине II, в то время он играл роль декоративного ароматического растения.',
        createdAt: new Date('2017.01.05 15:44:00'),
        author: 'Чаплин Чарли',
        content: 'Сельдерей существует клубневой, черешковый и зеленый, с пышной листвой и зеленью. Каждый вид нашел свое место в кулинарии. При засолке овощей используют исключительно мелко нарезанный клубень, но не листву, а вот в супах, напротив, предпочитают для аромата сельдерей листовой или черешковый.',
        exist: true,
    },
    {
        id: '19',
        title: 'Самые необычные отели мира',
        summary: 'Переночевать в пещере или провести ночь на высоте 17 м в кабине портового крана. Туристов по всему миру все чаще удивляют не только памятниками культуры или природы, но и отелями',
        createdAt: new Date('2017.03.01 11:14:10'),
        author: 'Иванов Иван',
        content: 'В шведской деревне Юккасарви функционирует ледяной отель — Icehotel. Для комфортного пребывания гостям выдается теплая одежда (комбинезоны, ботинки, перчатки и балаклавы), спальные мешки. Температура комнат поддерживается на уровне от -5C до -7C. Помимо «холодных» номеров, на территории расположена церковь, бар, ресторан, лаундж-зоны и отапливаемые комнаты. Администрация отеля рекомендует бронировать одну ночь в холодном номере и пару ночей в теплом помещении',
        exist: true,
    },
    {
        id: '20',
        title: 'Все, что вы хотели знать о безрамном внедорожнике ',
        summary: 'Новый Land Rover Discovery - это не просто очередная смена поколений. Это - важное послание прогрессивному автомобильному сообществу и смелый вызов консервативному джиперскому братству. ',
        createdAt: new Date('2016.11.12 13:14:15'),
        author: 'Селезнев Андрей',
        content: 'Все вопросы, связанные с поведением Discovery на разных типах дорог и бездорожья, приводят к рассказу о самом главном изменении в автомобиле. Итак, пятое поколение получило несущий кузов, причем кузов очень легкий. Он на 85% сделан из алюминия, сталь использована только для подрамников и дверей, да еще рамка радиатора сделана из магниевого сплава. В результате Discovery V получился очень легким, сбросив сразу 480 килограммов по сравнению с предшественником.',
        exist: true,
    },
];
let articleAmount;
let latestFilter;

function compareDates(a, b) {
    return b.createdAt - a.createdAt;
}
module.exports.getArticles = function (skip, top, filtItem) {
    let mas = null;
    let dateIn;
    let dateOut;
    skip = skip || 0;
    top = top || 6;
    filtItem = filtItem || latestFilter;
    articles.sort(compareDates);
    mas = articles.filter(function (obj) {
        return obj.exist === true;
    });
    if (typeof (skip) === 'number' && typeof (top) === 'number') {
        if (filtItem) {
            if (filtItem.author) {
                mas = mas.filter(function (obj) {
                    return (obj.author.toLowerCase() === filtItem.author.toLowerCase());
                });
            }
            if (filtItem.from || filtItem.upTo) {
                if (filtItem.from) {
                    dateIn = new Date(filtItem.from);
                } else {
                    dateIn = new Date('01.01.0001');
                }
                if (filtItem.upTo) {
                    dateOut = new Date(filtItem.upTo);
                } else {
                    dateOut = new Date();
                }
                if (mas) {
                    mas = mas.filter(function (ob) {
                        return ((ob.createdAt - dateIn >= 0) && (dateOut - ob.createdAt >= 0));
                    });
                } else {
                    mas = articles.filter(function (o) {
                        return ((o.createdAt - dateIn >= 0) && (dateOut - o.createdAt >= 0));
                    });
                }
            }
        }
    }
    if (skip == 0)
        articleAmount = mas.length;
    return mas.slice(skip, skip + top);
};
module.exports.getArticle = function (id) {
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id == id && articles[i].exist === true) {
            return articles[i];
        }
    }
};
function validateArticle(article) {
    if (!article.title || !article.summary
        || !article.createdAt || !article.author || !article.content) {
        return false;
    }
    if (typeof (article.title) !== 'string' || typeof (article.summary) !== 'string'
        || typeof (article.author) !== 'string' || typeof (article.content) !== 'string') {
        return false;
    }
    if (article.title.length >= 100 || article.summary.length >= 200) {
        return false;
    }
    if (article.author.length === 0 || article.content.length === 0) {
        return false;
    }
    return true;
}

module.exports.addArticle = function (article) {
    if (validateArticle(article) === true) {
        articleAmount = articleAmount + 1;
        article.id = String(Date.now());
        article.createdAt = new Date();
        article.exist = true;
        articles.push(article);
        articles.sort(compareDates);
        return true;
    }
    return false;
};
module.exports.editArticle = function (article) {
    let temp = module.exports.getArticle(article.id);
    let clone = {};
    for (let i in temp) {
        clone[i] = temp[i];
    }
    if (temp) {
        temp.title = article.title;
        temp.summary = article.summary;
        temp.content = article.content;
    }
    if (validateArticle(temp) === false) {
        for (let j in clone) {
            temp[j] = clone[j];
        }
        return false;
    }
    return true;
};

function getIndex(id) {
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === id && articles[i].exist === true) {
            return i;
        }
    }
    return null;
}
module.exports.removeArticle = function (id) {
    const numb = getIndex(id);
    if (numb !== null) {
        articles[numb].exist = false;
        articleAmount = articleAmount - 1;
        return true;
    }
    return false;
};
module.exports.getArticleAmount = function () {
    return articleAmount;
}
module.exports.changeFilter = function (filtConf) {
    latestFilter = filtConf;
};
