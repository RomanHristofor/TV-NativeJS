var CreateModal = {
      constructor: function(className, img, title, caption, body) {
      this.className = className;
      this.img = img;
      this.title = title;
      this.caption = caption;
      this.body = body;
      return this;
      }
    };
var channel;
var channelArrayObj = [
  channel = Object.create(CreateModal).constructor(
      "informative",
      "<img src='style/img/tooltips/by1/club.jpg'>",
      "клуб редакторов",
      "позновательные",
      "Проект Агентства теленовостей - дискуссионная площадка, на которой главные редакторы самых авторитетных белорусских изданий  ведут открытый диалог без купюр о самых важных и актуальных общественно-политических событиях в стране и в мире. Автор идеи и ведущий проекта - Председатель Белтелерадиокомпании Геннадий Давыдько."
  ),
  channel = Object.create(CreateModal).constructor(
      "news",
      "<img src='style/img/tooltips/by1/90s.jpg'>",
      "90 секунд",
      "Новости",
      "Новостная передача."
  ),
  channel = Object.create(CreateModal).constructor(
      "films",
      "<img src='style/img/tooltips/by1/lvarvara.jpg'>",
      "ЛЮБОПЫТНАЯ ВАРВАРА",
      "Фильмы и сериалы",
      "Варвара Ивановна Слуцкая - бывшая учительница, а ныне пенсионерка. Все свободное время она проводит за чтением детективов Агаты Кристи. Варвара Ивановна переезжает в квартиру к своему сыну Роману и его жене Алёне помогать с воспитанием внуков Гоши и Лизы. Поначалу отношения Варвары Ивановны с невесткой складываются не очень гладко: \"две хозяйки на одной кухне\". К тому же у Слуцкой-старшей свои взгляды и методы воспитания внуков. "
  ),
  channel = Object.create(CreateModal).constructor(
      "news",
      "<img src='style/img/tooltips/by1/news.jpg'>",
      "Новости",
      "инфо",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/by1/my_dog.jpg'>",
      "Это моя собака",
      "Фильмы и сериалы",
      "Пять лет Ирина безропотно ждала, пока ее возлюбленный Костя разведется с женой и сделает ей предложение. Наконец долгожданный день настал: Константин приглашает Иру в ресторан и торжественно объявляет, что купил обручальные кольца. Вот только второе кольцо предназначается не ей, а дочке начальника… "
  ),
  channel = Object.create(CreateModal).constructor(
      "other",
      "<img src='style/img/tooltips/ont/lawesome.jpg'>",
      "Жить здорово!",
      "другое",
      "\"Жить здорово!\" - совсем не случайное название, - говорит ее ведущая Елена Малышева. – В русском языке слова \"здОрово\" и \"здорОво\" пишутся абсолютно одинаково, а для нас важно, чтобы оба этих понятия стали для зрителей синонимами."
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "<img src='style/img/tooltips/ont/Nnews.jpg'>",
      "Наши новости",
      "инфо",
      "Самая оперативная информация о событиях в стране и мире."
  ),
  channel = Object.create(CreateModal).constructor(
      "sport",
      "<img src='style/img/tooltips/ont/sport.jpg'>",
      "Новости спорта",
      "спорт",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "other",
      "<img src='style/img/tooltips/ont/prigovor.jpg'>",
      "Модный приговор",
      "другое",
      "Новое, первое на отечественном телевидении грандиозное ток-шоу о моде и стиле. Вы сможете наблюдать, как женщины и мужчины преображаются на глазах у зрителей. Герои передачи преображаются два раза: первый раз – в соответствии со своими представлениями о своем идеальном образе, второй раз – в соответствии с тем, как видят их стилисты."
  ),
  channel = Object.create(CreateModal).constructor(
      "informative",
      "<img src='style/img/tooltips/ont/tablet.jpg'>",
      "Таблетка",
      "позновательное",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "",
      "24 часа",
      "инфо",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "films",
      "<img src='style/img/tooltips/stv/rkruso.jpg'>",
      "Робинзон Крузо",
      "фильмы",
      "По роману \"Жизнь и приключения Робинзона Крузо\" Дэниэля Дефо. Открывается фильм сценой дуэли на шпагах, из-за которой Робинзону Крузо и пришлось стать моряком и отправиться на встречу со своей судьбой."
  ),
  channel = Object.create(CreateModal).constructor(
      "sport",
      "",
      "СТВ-спорт",
      "спорт",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "babies",
      "<img src='style/img/tooltips/stv/mult.jpg'>",
      "Мультфильм",
      "детям",
      "Мультфильм для детей"
  ),
  channel = Object.create(CreateModal).constructor(
      "babies",
      "<img src='style/img/tooltips/stv/mult1.jpg'>",
      "Звездные собаки: Белка и Стрелка",
      "детям",
      "Привычный ход вещей нарушен! Цирковая собака Белка больше не выйдет на манеж покорять сердца зрителей, а дворняжка Стрелка не будет ночевать в подворотнях и искать себе пропитание. Теперь они не просто собаки, а члены отряда космонавтов."
  ),
  channel = Object.create(CreateModal).constructor(
      "informative",
      "<img src='style/img/tooltips/ntv/sud-pr.jpg'>",
      "Суд присяжных",
      "позновательное",
      "В программе рассматриваются особо тяжкие уголовные дела, основанные на реальных преступлениях. Под председательством судьи — Степанова Валерия Ивановича — 12 присяжных оценивают доказательства вины или невиновности подсудимого, представленные сторонами обвинения и защиты."
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "<img src='style/img/tooltips/ntv/today.jpg'>",
      "Сегодня",
      "инфо",
      "\"Сегодня\" — это известное всем имя новостей НТВ, визитная карточка канала. Программа \"Сегодня\" — это десятки репортеров в российских городах, постоянно действующие корпункты в США, Израиле, Великобритании, Франции, Бельгии, Германии, на Украине, в Белоруссии и Киргизии, специальные корреспонденты, готовые немедленно отправиться в любую точку мира и выйти в прямой эфир."
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "<img src='style/img/tooltips/ntv/review.jpg'>",
      "Сегодня",
      "инфо",
      "\"Чрезвычайное происшествие\" - информационная программа о чрезвычайных происшествиях в стране и мире. Наши зрители всегда первыми узнают о том, что случилось. Двадцать четыре часа в сутки корреспонденты программы следят за развитием чрезвычайных событий в стране и мире."
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/ntv/toptuny.jpg'>",
      "Топтуны",
      "сериалы",
      "\"Топтуны\" - сленговое название спецотдела, сотрудники которого работают исключительно под псевдонимами. И это оправдано: специализируются они на наружном наблюдении за лицами, замешанными напрямую или косвенно в уголовных делах и преступлениях против государства."
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/ntv/otdel.jpg'>",
      "Отдел 44. Фотография",
      "сериалы",
      "На железнодорожных путях обходчики находят тело мужчины. Оперативники обнаруживают возле места преступления рюкзак с наркотиками и фото девушки. По следам шин выходят на кафе, которое посещал погибший, и устанавливают его личность."
  ),
  channel = Object.create(CreateModal).constructor(
      "informative",
      "<img src='style/img/tooltips/rtr/bander.jpg'>",
      "\"Бандеровцы. Палачи не бывают героями\"",
      "позновательное",
      "\"Бандеровцы. Палачи не бывают героями\". 70 лет назад, в 1945 году, Красная Армия победила нацизм, и казалось, что на территории Советского Союза никогда не поднимет голову зверь по имени \"национал-социализм\"."
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "",
      "Новости - Беларусь",
      "инфо",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "<img src='style/img/tooltips/rtr/vesti.jpg'>",
      "Вести",
      "инфо",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "informative",
      "<img src='style/img/tooltips/rtr/about-main.jpg'>",
      "О самом главном",
      "позновательное",
      "Как часто мы ходим к врачу? - У нас никогда нет времени на здоровье... Легко ли попасть на прием к лучшему специалисту? - Не так легко, как кажется... Программа \"О самом главном\" - время заняться своим здоровьем всерьез."
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/rtr/search.jpg'>",
      "Поиск улик",
      "сериалы",
      "Артем Сергеев - молодой человек, посвятивший свою жизнь науке. Ученый-химик, профессор и кандидат наук, по стечению обстоятельств он покидает лабораторию и устраивается на работу экспертом-криминалистом в МВД."
  ),
  channel = Object.create(CreateModal).constructor(
      "leisure",
      "",
      "Домашний магазин",
      "досуг",
      ""
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/8tv/puaro.jpg'>",
      "Пуаро Агаты Кристи",
      "сериалы",
      "Сериал по одноименному циклу детективных романов Агаты Кристи о бельгийском детективе Эркюле Пуаро."
  ),
  channel = Object.create(CreateModal).constructor(
      "babies",
      "",
      "Мульт-парад",
      "детям",
      "Мульт-парад"
  ),
  channel = Object.create(CreateModal).constructor(
      "info",
      "<img src='style/img/tooltips/8tv/weather.jpg'>",
      "Погода",
      "инфо",
      "Самые точные данные гидрометцентра."
  ),
  channel = Object.create(CreateModal).constructor(
      "serials",
      "<img src='style/img/tooltips/8tv/heirs.jpg'>",
      "Наследники",
      "сериалы",
      "Молодые строители, опережая намеченные сроки и преодолевая огромные трудности, сдают досрочно первый пусковой объект химкомбината."
  )
];
