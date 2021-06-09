var messages = Array(
    [
      ["Наталья", "img/ppl/w1.jpg", "Всем привет, кто нибудь выигрывал?!"],
      ["Олег", "img/ppl/m1.jpg", "Да, получил 130 баксов"],
      ["Марина", "img/ppl/w2.jpg", "Олег, молодец)"],
      ["USER 39431", "undefined", "у меня 50 выпало)))"],
      [
        "Ирина Сергеевна",
        "img/ppl/w3.jpg",
        "Я сюда через инстаграм одна попала?",
      ],
      [
        "USER05339",
        "undefined",
        "Не знаю, мне лично в директ приграшение пришло",
      ],
      ["ДАМИР", "undefined", "Из коробки вылезла карта на 30 долларов, как вывести?"],
      ["Иван Григорьевич", "img/ppl/m2.jpg", "всем привет"],
      ["USER5854", "undefined", "Ребят, ну что у кого как? Мне не везёт что-то"],
      [
        "Иван Григорьевич",
        "img/ppl/m2.jpg",
        "ДАМИР, на странице вывода средств введи номер карты или кошелька своего",
      ],
      ["Марина", "img/ppl/w2.jpg", "Ну пиздец, опять пусто!"],
      ["Олег", "img/ppl/m1.jpg", "Марина, зачем ругаться?"],
      ["Марина", "img/ppl/w2.jpg", "В жизни не везёт и тут лажа..."],
      [
        "USER9585",
        "undefined",
        'Отличнооо... У меня после конвертации 48 тысяч упало<a href="img/48000.jpg" data-lightbox="roadtrip"><img src="img/48000.jpg"></a>',
      ],
      ["Ирина Сергеевна", "img/ppl/w3.jpg", "Поделишься?"],
      ["USER9585", "undefined", "Ирина, со мной ктобы поделился)"],
      ["Ирина Сергеевна", "img/ppl/w3.jpg", "Эх..."],
      ["Олег", "img/ppl/m1.jpg", "что это за ху*я?"],
      ["Рената", "img/ppl/w4.jpg", "Розыгрыш, молодой человек, выражайтесь более сдержанно."],
      ["USER8595", "undefined", "Блин, крутой конкурс! Во время я сюда попал)"],
      ["Макс", "undefined", "Сегодня должны много призов разыграть"],
      ["Марина", "img/ppl/w2.jpg", "Да уже почти все разыграли)"],
      ["Валентина", "img/ppl/w5.jpg", "помогите, скажите что делать"],
      ["Рената", "img/ppl/w4.jpg", "открывать коробки и надеяься что что-то выпадет)"],
      [
        "Николай",
        "img/ppl/m3.jpg",
        "Для новеньких говорю, просто жмите по коробочкам и если что то выиграли оформляйте!",
      ],
      [
        "Иван Григорьевич",
        "img/ppl/m2.jpg",
        "Угу, надо просто ждать и надеяться на миллион)0",
      ],
      [
        "Ольга Петровна",
        "undefined",
        "Всем здравствуйте. Я пенсионерка, скажите пожалуйста, это правда и как учавстовать то не пойму ника я?",
      ],
      [
        "Екатерина",
        "img/ppl/w1.jpg",
        "Это Розыгрыш, может повезет, а может нет...",
      ],
      ["USER95958", "undefined", "Мне одному дали подарочный сертификат?"],
      ["Ольга Петровна", "undefined", "Нет, тут таких много."],
      [
        "Никита",
        "undefined",
        "ДАА,В ЧЕСТЬ ЮБИЛЕЯ МНОГО ПОДАРОЧНЫХ ВЫДЕЛИЛИ ПОХОДУ",
      ],
      ["Рената", "img/ppl/w4.jpg", "ну вот и все! ни чего не выиграла, думала в последней коробочке хоть что-то будет((("],
      [
        "Дима",
        "undefined",
        "и в чем прикол? мне пишет 0 рублей, попытки кончились. зря время потратил",
      ],
      ["Николай", "img/ppl/m3.jpg", "ну тебе не повезло Дмиан))"],
      ["Диана", "img/ppl/w6.jpg", "Кто каким способом деньги забирать будет?"],
      ["Наталья", "img/ppl/w1.jpg", "Лично я на карту, удобнее всего."],
      ["USER5454", "undefined", "ой а мне удобнее на QIWI кошелёк"],
      ["Олег", "img/ppl/m1.jpg", "Сейчас у QIWI проблемы, кошельки блокируют часто, лучше на карту"],
      [
        "Людмила",
        "img/ppl/w7.jpg",
        "Олег, мне кажется на яндекс кошелёк вот надёжнее, а то с карты своруют еще",
      ],
      ["Кристина", "undefined", "да сейчас с карты не своруешь уже"],
      ["Ирина", "img/ppl/w8.jpg", "Да лучше на карту, с этими электронными кошельками разбираться...ужас"],
      ["Рената", "img/ppl/w4.jpg", "У КОГО КАКОЙ ПРИЗ? У МЕНЯ 200 долларов"],
      [
        "Олег",
        "img/ppl/m1.jpg",
        '50 000 прришло, забухаю хахахах<a href="img/50000.jpg" data-lightbox="roadtrip"><img src="img/50000.jpg"></a>',
      ],
      ["Людмила", "img/ppl/w7.jpg", "У меня пусто..."],
      [
        "Марина",
        "undefined",
        "Ничего страшного, в следующий раз повезет Людмила!",
      ],
      [
        "Марина",
        "undefined",
        'У меня супер приз 75 500, глазам не верю<a href="img/75500.jpg" data-lightbox="roadtrip"><img src="img/75500.jpg"></a>',
      ],
      [
        "Екатерина",
        "img/ppl/w1.jpg",
        "Ух, поздравляю! И какая комиссия с этой суммы?",
      ],
      ["Марина", "undefined", "Комиссии никакой нету, попросили конвертацию из долларов в рубли оплатить только)"],
      ["Наталья", "img/ppl/w1.jpg", "Напишите когда придет)"],
      ["Марина", "img/ppl/w2.jpg", "Когда новый Розыгрыш?"],
      ["Николай", "img/ppl/m3.jpg", "Да каждый день помоему тут что то разыгрывают"],
      [
        "Марина",
        "undefined",
        "Екатерина, пришла) Красота когда на карте кругленькая сумма))",
      ],
      ["Марина", "img/ppl/w2.jpg", "завтра за шубой?)"],
      ["Марина", "undefined", "Нет, я лучше отложу."],
      ["USER8541", "undefined", "Что еще за конвертация!???"],
      ["USER8541", "undefined", "её оплачивать надо!? АУ"],
      ["Олеся", "undefined", "Да, надо оплатить"],
      ["Николай", "img/ppl/m3.jpg", "Красота, только что 50 тысяч пришло"],
      ["USER8541", "undefined", "НИКОЛАЙ а вы формирование документов оплатили????"],
      ["Николай", "img/ppl/m3.jpg", "да, оплачивал"],
      ["Олеся", "undefined", "а как вы хотели?) без этого никак, крупная сумма"],
      ["Марина", "img/ppl/w2.jpg", "Ага, это точно, законы есть законы"],
      ["USER8541", "undefined", "ладно, сейчас попробую оплатить"],
      ["Марина", "img/ppl/w2.jpg", "Кто на что приз потратит?"],
      ["Юлия", "undefined", "Мечтала о шубе. Её и куплю!"],
      ["Наталья", "img/ppl/w1.jpg", "Шубу из норки???))"],
      ["Юлия", "undefined", "Да, именно ее))"],
      ["USER8553", "undefined", "Каким способом лучше выигрыш забрать?"],
      ["Юлия", "undefined", "Кому как) лично я на карту вывела"],
      ["USER8553", "undefined", "конвертацию оплачивали?", "bussines"],
      ["Юлия", "undefined", "Да"],
      ["USER8541", "undefined", "Все ровно"],
      ["USER8541", "undefined", "ну я эту конвертацию оплатил, деньги получил"],
      ["USER8553", "undefined", "долго ждали?"],
      ["USER8541", "undefined", "Пару минут после оплаты"],
      ["USER8553", "undefined", "быстро"],
      ["Рената", "img/ppl/w4.jpg", "Да, платежи быстро приходят"],
      ["Илюха", "img/ppl/m4.jpg", "Не могу оплатить комиссию че делать"],
      ["Василий Ветров", "undefined", "Я тоже не мог оплатить, написал в поддержку, мне оператор сказал, что у меня на карте заблокированны интернет  платежи, я позвонил в банк, разрешил 10 интернет платежей, так на всякий случай вдруг буду покупать еще что нибудь, оплатил все комиссии и мне упало 30000 тенге, я сам из казахстана, мне очень помогли спасибо, а то я думал почему не могу в интернете ни где с карточки платить, оказывается вон оно че, так что если у кого то так же, платеж не проходит, то звоните в свой банк и разрешайте платежи!"],
      ["Иринаа", "undefined", "Почему не можете?"],
      ["Илюха", "img/ppl/m4.jpg", "не получается"],
      ["USER8541", "undefined", "Попробуй другим способом"],
      ["Марина", "img/ppl/w2.jpg", "Так..когда следующея?)"],
      [
        "Екатерина",
        "img/ppl/w1.jpg",
        "Теперь завтра только, а то сегодня и так много призов раздали.",
      ],
      ["Регина", "undefined", "АГААА"],
      ["Зинаида", "undefined", "А это государственный Розыгрыш?"],
      ["Константин", "img/ppl/m5.jpg", "Да, государственный и еще от блогеров и звезд)"],
      [
        "Зинаида",
        "undefined",
        "Это хорошо, тогда лучше на карту выведу, с кошельков комиссии разные",
      ],
      [
        "Константин",
        "img/ppl/m5.jpg",
        "правильно, я сам почтовым заказал",
      ],
      ["Зинаида", "undefined", "Доставка дороговатая правда."],
      ["Елена Дмитриевна", "undefined", "Смотря какой выигрыш=))"],
      ["USER95843", "undefined", "Только что получил на карту, пиздец как рад!"],
      ["Регина", "undefined", "Круто.. Поздравляю"],
      ["Елена Дмитриевна", "undefined", "Матом хватит ругаться тут"],
      ["Марина", "img/ppl/w2.jpg", "Сейчас бы пол ляма)"],
      ["Лена", "undefined", "дааааа.. и машину новую ))"],
      ["Петр", "img/ppl/m6.jpg", "Мечтайте дальше)"],
      [
        "Валентина",
        "img/ppl/w5.jpg",
        "Это просто праздник, сумму называть не буду, что бы не сглазить",
      ],
      ["Александр", "img/ppl/m7.jpg", "До свидания"],
      ["Елена Дмитриевна", "undefined", "пока всем))"],
      ["Станислав", "img/ppl/m8.jpg", "а я напьюся от счастья))"],
      ["Ксения", "undefined", "только не спейтесь"],
      ["Константин", "img/ppl/m5.jpg", "ххахахха"],
      ["Надежда", "undefined", "Ждем следующий розыгрыш! Всем пока"],
      [
        "Дарья",
        "img/ppl/w10.jpg",
        "После оплаты комиссии за перево 10 минут  перевод ждала, думала уже не придет)",
      ],
      ["Ксения", "undefined", "у меня мин за 5 пришло"],
      ["Анастасия", "undefined", "Мне вообще сразу после оплаты пришли деньги"],
      ["Полина", "undefined", "Какая сумма была?."],
      ["Анастасия", "undefined", "95000"],
      ["Полина", "undefined", "Примите поздравления"],
      ["Анастасия", "undefined", "Спасибо)"],
      ["User85553", "undefined", "Всем добра!"],
      ["Кристинка", "undefined", "всем пока"],
      ["Константин", "img/ppl/m5.jpg", "Пока"],
      ["Маргарита", "undefined", "До встречи))"],
      ["Ксения", "undefined", "пока"],
      ["Анастасия", "undefined", "все уходят?(("],
      ["Надежда", "undefined", "Ну да, надо идти выигрыши тратить"],
      ["Маргарита", "undefined", "это точно"],
      ["Анастасия", "undefined", "Пока"],
      ["Илюха", "img/ppl/m4.jpg", "=)"],
            ["Петр Валуев", "img/ppl/m4.jpg", "да ни кто не уходит, прикалываются, ну че пишите еще кто чего выиграл, у меня сегодня пусто, я вчера 100 баксов поймал!"],
      ["Марина", "img/ppl/w2.jpg", "кто нибудь комиссионый платеж оплачивал"],
      ["Диман", "undefined", "да, я оплатил мгновенный перевод"],
      ["Марина", "img/ppl/w2.jpg", "и что? пришли деньги?"],
      ["Диман", "undefined", "Да, пришли"],
      ["Ирина", "img/ppl/w8.jpg", "Ага, мне тоже пришлось оплачивать"],
      [
        "USER05339",
        "undefined",
        "ну комиссионый платеж только для тех, кто более 50000 тысяч выиграл",
      ],
      ["ДАМИР", "undefined", "ДА, ПОЭТОМУ МОЖНО И ОПЛАТИТЬ)"],
      ["Марина", "img/ppl/w2.jpg", "Сейчас попробую оплатить"],
      ["USER5854", "undefined", "Отличный Розыгрыш)"],
      ["Иван", "img/ppl/m9.jpg", "как дела господа?"],
      ["Марина", "img/ppl/w2.jpg", "все отлично"],
      ["USER9593", "undefined", "все хорошо, у вас как?"],
      ["Иван", "img/ppl/m9.jpg", "тоже хорошо"],
      ["USER9593", "undefined", "Получили выигрышь? "],
      ["Иван", "img/ppl/m9.jpg", "Да, а вы"],
      ["USER9593", "undefined", "Тоже))"],
      [
        "Ира",
        "undefined",
        "большое спасибо розыгрышу) пришло на карту 55 800 рублей))",
      ],
      [
        "ИГОРЬ СОМНЕВ",
        "undefined",
        "Отлично, с советских времен поигрываю в лотерейки и казино азартный человек, и впервые столь крупно повезло. Выиграл на второй день 75000 рублей в коробке!.",
      ],

      ["User8423", "undefined", "Супер) получила 88000"],
      ["Алина", "img/ppl/w9.jpg", "да, Розыгрыш просто ШИК!"],
      ["Илья", "undefined", "всем привет)"],
      [
        "Орлов",
        "img/ppl/m10.jpg",
        "Формирование запроса просит оплатит, че за фигня",
      ],
      [
        "Илья",
        "undefined",
        "Орлов, у меня лично после конвертации деньги пришли",
      ],
      ["Орлов", "img/ppl/m10.jpg", "Илья, а  у вас какой выигрыш был?"],
      ["USER85934", "undefined", "СУПЕР-ПУПЕР))) пришло 9 тысяч гривен"],
      ["Илья", "undefined", "Орлов, 157200 рублей"],
      ["USER5854", "undefined", "не плохо так)"],
      [
        "Орлов",
        "img/ppl/m10.jpg",
        "ааа, у меня просто 225 000 рублей, поэтому и просит  формирование запроса",
      ],
      ["User8423", "undefined", "ну и чего ждешь?)"],
      ["Илья", "undefined", "Ага) ради 225 тысяч нежалко"],
      ["Иван", "img/ppl/m9.jpg", "Это точно)"],
      ["USER7577", "undefined", "Я тоже формирование оплачивал "],
      ["Иван", "img/ppl/m9.jpg", "И что?"],
      ["USER7577", "undefined", "Иван, после оплаты деньги пришли"],
      ["Иван", "img/ppl/m9.jpg", "Много?)"],
      ["Дарья", "img/ppl/w10.jpg", "всем привет))"],
      ["USER55537", "undefined", "Приветики"],
      ["Иван", "img/ppl/m9.jpg", "привет Дарья)"],

      ["USER5939", "undefined", "HI"],
      ["Лена", "undefined", "никак не нарадуюсь)) выиграла 245900 рублей"],
      ["Любовь", "undefined", "Лена, Пришли деньги?"],
      ["дика", "undefined", "Лена, Регистрацию выплаты делали?"],
      ["Лена", "undefined", "да, деньги пришли! регистрацию выплаты делала."],
      ["дика", "undefined", "Лена, оплачивали регистрацию?"],
      ["Лена", "undefined", "да, оплтила"],
      ["Любовь", "undefined", "а сколько деньги ждали?"],
      ["Лена", "undefined", "Да они быстро пришли, мин за 5."],
      ["USER85828", "undefined", "да, мне тоже буквально минут за пять пришло"],
      ["Надежда", "undefined", "Всем привет)) регистрация выплаты обязательная?"],
      ["Виктор", "undefined", "Надежда, да. Такие законы у нас."],
      ["Иван", "img/ppl/m9.jpg", "Ох уж эти законы, скоро вообще карты запретят"],
      ["USER95335", "undefined", "Когда еще Розыгрыш проводится будет? "],
      ["Иван", "img/ppl/m9.jpg", "Да он каждый день тут"],
      ["USER9593", "undefined", "надеемся))"],
      ["USER95335", "undefined", "Круто=)"],

      ["Евгений", "undefined", "У кого нибудь более 200000 было?"],
      ["USER85853", "undefined", "У меня было 224 000 рублей "],
      ["Евгений", "undefined", "А вы заверение реквизитов делали?"],
      ["USER85853", "undefined", "Делал"],
      ["USER85853", "undefined", "И вам советую!"],
      ["Евгений", "undefined", "Сейчас оплачу"],
      ["USER85853", "undefined", "Вам все равно эти деньги обратно вернут"],
      ["Влад", "undefined", "да, вместе с основной выплатой мне отправили"],
      ["Евгений", "undefined", "Это хорошо"],
      ["USER00341", "undefined", "Мне бы сейчас 200 000))"],
      ["Влад", "undefined", "а у вас какой выигрыш? "],
      ["USER00341", "undefined", "0 рублей(("],
      ["Влад", "undefined", "сочуствую(("],
      ["Ира", "undefined", "Печалькааа"],
      ["Влад", "undefined", "да, вместе с основной выплатой мне отправили"],
      ["Евгений", "undefined", "Это хорошо"],
      ["USER00341", "undefined", "как дера орлы?))"],
      ["Влад", "undefined", "отлично "],
      ["USER00341", "undefined", "агааа"],
      ["Дима", "undefined", "когда еще Розыгрыш будет"],
      ["Ира", "undefined", "завтра приходи он каждый день"],
      ["Илья", "undefined", "Кто будет праздновать выигрыш?))"],
      ["Гоша", "undefined", "наверное все)"],
      ["Иван", "img/ppl/m9.jpg", "хахах)) да да))"],
      [
        "Анна",
        "undefined",
        "Это просто невероятно, что я выиграла тут! Сроду такого не случалось, уже смирилась что я полный лузер и тут такая фантастика.",
      ],
      [
        "Валентина",
        "img/ppl/w5.jpg",
        "Вот это да, ну я совсем такого не ожидала! Это просто праздник",
      ],
      ["Ира", "undefined", "то что надо) 25000 рублей уже на карте))"],
      ["Валентина", "img/ppl/w5.jpg", "Будем ждать следующий))"],
      ["Ира", "undefined", "это точно!!!"],
    ]
  );
  function getMessageArrayID(page_id) {
    if (page_id < 1) {
      return 0;
    } else if (page_id < 1) {
      return 1;
    } else if (page_id < 1) {
      return 2;
    } else if (page_id < 1) {
      return 3;
    } else if (page_id < 1) {
      return 4;
    } else {
      return 0;
    }
  }
  function updateScriptMessages() {
    var ctime = Date.now();
    var arrayid = getMessageArrayID(page_id);
    var time =
      localStorage["chatmsgSCTIMELM"] == undefined
        ? ctime
        : parseInt(localStorage["chatmsgSCTIMELM"]);
    if (time <= ctime) {
      var last =
        localStorage["chatmsgSCLAST" + arrayid] == undefined
          ? 0
          : parseInt(localStorage["chatmsgSCLAST" + arrayid]);
      if (last < messages[arrayid].length) {
        localStorage["chatmsgSCTIMELM"] = Math.round(
          ctime + 4000 + Math.random() * 14000
        );
        if (last < 1 && arrayid == 0) {
          for (last = 0; last < 1; last++) {
            addChatMessage(
              messages[arrayid][last][2],
              messages[arrayid][last][0],
              messages[arrayid][last][1],
              false
            );

            var audio = new Audio('./chat.mp3');
            audio.volume = 0.02;
        audio.play();

          }
          localStorage["chatmsgSCLAST" + arrayid] = last;
        } else {
          addChatMessage(
            messages[arrayid][last][2],
            messages[arrayid][last][0],
            messages[arrayid][last][1],
            false
          );

          var audio = new Audio('./chat.mp3');
          audio.volume = 0.02;
        audio.play();
          localStorage["chatmsgSCLAST" + arrayid] = last + 1;
        }
      }
    }
  }

  var isactive = true;

  var lastscroll = 0;
  var toscroll = 0;
  var divscroll = $(".messages");
  var divscrollbutton = $(".buttonscrollend");
  var isuserscrolltop = false;
  function smarlScroll() {
    var currentScroll = divscroll.scrollTop();
    var toScroll = divscroll.prop("scrollHeight") - divscroll.outerHeight();

    if (!isuserscrolltop && currentScroll < toScroll) {
      if (toScroll - currentScroll > 500) {
        divscroll.scrollTop(toScroll - 100);
        lastscroll = toScroll - 100;
      } else {
        divscroll.scrollTop(currentScroll + 10);
        lastscroll = currentScroll + 10;
      }
    }
    if (lastscroll > toScroll) {
      lastscroll = toScroll;
    }
    if (isuserscrolltop && currentScroll >= toScroll) {
      isuserscrolltop = false;
    }
    if (isuserscrolltop && !divscrollbutton.hasClass("show")) {
      divscrollbutton.addClass("show");
    } else if (!isuserscrolltop && divscrollbutton.hasClass("show")) {
      divscrollbutton.removeClass("show");
    }
  }
  setInterval(smarlScroll, 20);
  $(".messages").scroll(function () {
    var currentScroll = divscroll.scrollTop();
    if (currentScroll < lastscroll) {
      isuserscrolltop = true;
    }
  });
  divscrollbutton.on("click", function () {
    isuserscrolltop = true;
  });

function scrolldown() {

  if (document.getElementById('msg33') !=null){
    $('#msg33').stop().animate({
    scrollTop: $('#msg33')[0].scrollHeight
  }, 3000);}

if (document.getElementById('msg33') ==null) {
 return;
  ;}



}


  function htmlAddChatMessage(name, text, img, time) {


    if (name == undefined || name == "undefined") {
      return $(".messages").append(
          '<div class="onemessagevbr sender"><img src="img/vbr16.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">Вы</div><div class="jegkergd"><span class="djhg">' +
          text +
          '</span><div class="timechatvbr">' +
          time +
          "</div></div></div></div>"
      );
    }
    if (img == undefined || img == "undefined") {
      return $(".messages").append(
          '<div class="onemessagevbr"><img src="img/vbr16.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' +
          name +
          '</div><div class="jegkergd"><span class="djhg">' +
          text +
          '</span><div class="timechatvbr">' +
          time +
          "</div></div></div></div>"
      );
    }
    if (img == 'sender' || img == "sender") {
      return $(".messages").append(
          '<div class="onemessagevbr sender"><img src="img/vbr16.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' +
          name +
          '</div><div class="jegkergd"><span class="djhg">' +
          text +
          '</span><div class="timechatvbr">' +
          time +
          "</div></div></div></div>"
      );
    }
    else {
      return $(".messages").append(
          '<div class="onemessagevbr"><img src="' +
          img +
          '" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' +
          name +
          '</div><div class="jegkergd"><span class="djhg">' +
          text +
          '</span><div class="timechatvbr">' +
          time +
          "</div></div></div></div>"
      );
    }
  }

  window.onload =  function loadingChatMessage() {
    var last =
      localStorage["lastChatMSG"] == undefined
        ? 0
        : parseInt(localStorage["lastChatMSG"]);
    for (var i = 0; i < last; i++) {
      htmlAddChatMessage(
        localStorage["chatmsgtmNAME" + i],
        localStorage["chatmsgtmTEXT" + i],
        localStorage["chatmsgtmIMG" + i],
        localStorage["chatmsgtmTIME" + i]
      );
    }
    if (last > 0) {
    }
  }



  function addChatMessage(text, name, img, rep) {
    var last =
      localStorage["lastChatMSG"] == undefined
        ? 0
        : parseInt(localStorage["lastChatMSG"]);
    localStorage["lastChatMSG"] = last + 1;

    var timeInMs = new Date();
    var time =
      (timeInMs.getHours() > 9
        ? timeInMs.getHours()
        : "0" + timeInMs.getHours()) +
      ":" +
      (timeInMs.getMinutes() > 9
        ? timeInMs.getMinutes()
        : "0" + timeInMs.getMinutes());
    localStorage["chatmsgtmNAME" + last] = name;
    localStorage["chatmsgtmTEXT" + last] = text;
    localStorage["chatmsgtmIMG" + last] = img;
    localStorage["chatmsgtmTIME" + last] = time;
    htmlAddChatMessage(name, text, img, time);
  }

  function updateMessage() {
    var tmUpdate = localStorage["sendMSGCHAT"] != undefined ? 10000 : 15000;
    setTimeout(updateMessage, tmUpdate);
  }
  function sendMessage(text) {
    var city =
      (localStorage.country != undefined && localStorage.country != "undefined"
        ? localStorage.country
        : "") +
      (localStorage.city != undefined && localStorage.city != "undefined"
        ? " г. " + localStorage.city
        : "");
    if (city == "") {
      city = "undefined";
    }
  }

function sendchatmsg() {
    if ($(".inputVBRSC").val().length > 0) {
      isuserscrolltop = false;
      if (isactive) {
        sendMessage($(".inputVBRSC").val());
        addChatMessage($(".inputVBRSC").val());
        $(".inputVBRSC").val("");

        localStorage["chatmsgSCTIMELM"] = Math.round(
          Date.now() + 40000 + Math.random() * 20000
        );
        localStorage["sendMSGCHAT"] = true;
      } else {
        noplgerr();
      }
    }
  }





 function updateonline() {
    var vals = [
      "62 человека",
      "61 человек",
      "62 человека",
      "63 человека",
      "60 человек",
      "64 человека",
      "62 человека",
      "65 человек",
      "61 человек",
      "63 человека",
    ];
    var id = Math.round(Math.random() * vals.length);
    $(".vbronline").html(vals[id]);
  }

  function noplgerr() {
      alert('Неизвестная ошибка, попробуйте позже.');
  }

  updateMessage();
  updateScriptMessages();
  setInterval(updateonline, 5000);
  setInterval(updateScriptMessages, 500);
