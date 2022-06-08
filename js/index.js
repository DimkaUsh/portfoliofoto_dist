

console.log(`
1. (Выполнено) Смена изображений в секции portfolio +25
  1.1 при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
  1.2 кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5

2. (Выполнено) Перевод страницы на два языка +25
 2.1 при клике по надписи ru англоязычная страница переводится на русский язык +10
 2.2 при клике по надписи en русскоязычная страница переводится на английский язык +10
 2.3 надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5

3. (Выполнено) Переключение светлой и тёмной темы +25
Вариант макета №1. 
На страницу добавлен переключатель при клике по которому:
 3.1 тёмная тема приложения сменяется светлой +10
 3.2 светлая тема приложения сменяется тёмной +10
 3.3 после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
 3.4 при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку (проверено)
4. (Не выполнено) Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы.
5. (Выполнено) Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5

 Итого:80`)

 const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'phone': 'Телефон',
    'message': 'Комментарий',
    'send-message': 'Отправить'
  }
}


// hemburger and adaptive menu
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const body = document.querySelector('.body');

const menuLink = document.querySelectorAll('.hamburger-menu__link');

function toggleMenu() {
  hamburger.classList.toggle('hamburger__open');
  hamburgerMenu.classList.toggle('hamburger-menu__open');
  hamburgerWrapper.classList.toggle('hamburger-wrapper_open');
  body.classList.toggle('body_open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
        hamburger.classList.remove('hamburger__open');
        hamburgerMenu.classList.remove('hamburger-menu__open');
        hamburgerWrapper.classList.remove('hamburger-wrapper_open');
        body.classList.remove('body_open');
}
menuLink.forEach((el) => el.addEventListener('click', closeMenu));

// change tabs in portolio

const portfolioTabs = document.querySelector('.portfolio__tabs');
const portfolioItemImg = document.querySelectorAll('.portfolio__item-img');
let active = portfolioTabs.querySelector('.active')

function changeImage(event) {
  
  if (event.target.classList.contains('active')) {
    return;
  }

  if (event.target.classList.contains('button')) {

    let value = event.target.dataset.season;

    portfolioItemImg.forEach((image, index) => {
          image.src = `./assets/images/portfolio/${value}/${index + 1}.jpg`;
          active = buttonActive(event.target);
        }
    )
  } 
}

function buttonActive(button) {
  if (active) {
      active.classList.remove('active');
  }
  button.classList.add('active');
  return button;
}

portfolioTabs.addEventListener('click', changeImage);

// change en / ru lang

function getTranslate(lang) {

  const textElements = document.querySelectorAll('[data-i18]');
  document.documentElement.setAttribute('lang', lang);

  textElements.forEach((el)=>{
    if (el.placeholder) {
        el.placeholder = i18Obj[lang][el.dataset.i18]
        el.textContent = '';
    }
    else{
        el.innerText = i18Obj[lang][el.dataset.i18];
    }
});
};

const activeLanguage = document.querySelectorAll('.lang');

activeLanguage.forEach(el => {
  el.addEventListener('click', () => {
    getTranslate(el.textContent);
    activeLanguage.forEach(btn => btn.classList.remove("lang_active"))
    el.classList.add("lang_active")
  });
});

// change black white theme

const arrOfElements = ['.body', '.button__change-theme', '.section-title__wrapper', '.section-title', '.skills-card__title', '.skills-card__text', '.price-card__text', '.price-card__title', '.footer__container', '.section-title_form', '.button_portfolio', '.hamburger-menu', '.line__center', '.line__bottom', '.line__upper']
const buttonChangeTheme = document.querySelector('.button__change-theme')

const themeChanged = () => {
  arrOfElements.forEach(el => {
    const list = document.querySelectorAll(el)
    list.forEach(item => {
      item.classList.toggle('theme_white')
    })
  })

}

buttonChangeTheme.addEventListener('click', themeChanged);





