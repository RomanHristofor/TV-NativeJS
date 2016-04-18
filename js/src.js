var CreateModal = {
      constructor: function(className, img, title, caption, body) {
      this.className = className;
      this.img = img;
      this.title = title;
      this.caption = caption;
      this.body = body;
      return this;
      }//,
      // id: function(){ var count = 100; return function(){return count++;}; }()
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
  )
];
