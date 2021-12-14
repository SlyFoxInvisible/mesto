const popupCloseButton = document.querySelector('.popup__close');
const cardsContainer = document.querySelector('.elements__content');
const cardNameInput = document.querySelector('.window__input_text');
const cardLinkInput = document.querySelector('.window__input_text_src');
const modalWindow = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');
const inputName = document.querySelector('.popup__text .popup__input_text_name');
const inputVocation = document.querySelector('.popup__text .popup__input_text_vocation');
const popupWindow = document.querySelector('#window');
const profileCreateBtn = document.querySelector('.profile__add-button');
const popupWindowCloseBtn = document.querySelector('#window__close');
const imageOpened = document.querySelector('#popup-photo');
const imageClosedBtn = document.querySelector('.popup-photo__button');
const imageOpenedText = document.querySelector('.popup-photo__text');
const imageOpenedImg = document.querySelector('.popup-photo__image');

const cardElementTemplate = document.querySelector('#element__template').content;

// Загрузка карточек на страницу
const initialCards = [
    {
        name: 'Пятигорск',
        link: 'https://images.unsplash.com/photo-1575993494151-3de9981c040c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1577887789303-d2510cc5e562?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1265&q=80'
    },
    {
        name: 'Дублин',
        link: 'https://images.unsplash.com/photo-1554391536-8c803d39f12f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },
    {
        name: 'Лос-Анджелес',
        link: 'https://images.unsplash.com/photo-1544413660-299165566b1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Киев',
        link: 'https://images.unsplash.com/photo-1587812404957-aec0c99d47ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Токио',
        link: 'https://images.unsplash.com/photo-1443170412500-d04323a4eb57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    }
];

initialCards.reverse();

//Функция открытия попапов
function openPopup(popup){
    popup.classList.add('popup_is-opened');
    popup.classList.add('window_is-opened');
    popup.classList.add('popup-photo_opened');
    document.addEventListener('keydown', closeEsc);
}
//Функция закрытия попапов
function closePopup(popup){
    popup.classList.remove('popup_is-opened');
    popup.classList.remove('window_is-opened');
    popup.classList.remove('popup-photo_opened');
}
//Функция для закрытия попапов клавишей Esc
function closeEsc(evt) {
    if (evt.key === 'Escape'){
        const escOpen = document.querySelector('.popup_is-opened');
        closePopup(escOpen);
    }
}

function createCard (cardName, cardLink){
    const card = cardElementTemplate.querySelector('.elements__content-item').cloneNode(true);
    const cardTitle = card.querySelector('.elements__text');
    const cardImg = card.querySelector('.elements__image');
    const cardLikeButton = card.querySelector('.elements__like-button');
    const cardDeleteButton = card.querySelector('.elements__delete-button');

    cardTitle.textContent = cardName;
    cardImg.src = cardName;
    cardImg.src = cardLink;
    cardImg.alt = cardName;

    cardDeleteButton.addEventListener('click', () => card.remove());
    cardLikeButton.addEventListener('click', () => cardLikeButton.classList.toggle('elements__like-button_active'));
    //Открывает картинку в модальном окне
    function renderCardPopup() {
        openPopup(imageOpened);
        imageOpenedImg.src = cardImg.src;
        imageOpenedImg.alt = cardImg.alt;
        imageOpenedText.textContent = cardTitle.textContent;
    }

    cardImg.addEventListener('click', renderCardPopup);

    return card;
}

function closedImage () {
    // imageOpened.classList.remove('popup-photo_opened');
    closePopup(imageOpened);
}

// Закрытие попапов по кнопке Escape
// document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//         // popupWindow.classList.remove('window_is-opened');
//         // modalWindow.classList.remove('popup_is-opened');
//         // imageOpened.classList.remove('popup-photo_opened');
//             closePopup();
//     }
// })

//Кнопка лайка
// document.addEventListener('click', ({ target: t }) => {
//     if (t.classList.contains('elements__like-button')) {
//         const index = [...document.querySelectorAll('.elements__like-button')].indexOf(t);
//         const count = document.querySelectorAll('.elements__like-button')[index];
//         count.classList.toggle('elements__like-button_active');
//     }
// });

// карточка на страницу
function addCard (newCard) {
    cardsContainer.prepend(newCard);
}

// работа с массивом
function renderCards (array) {
    array.forEach((item) => {
        newCard = createCard(item.name, item.link);
        addCard(newCard);
    });
}
renderCards(initialCards);


// Открываем и закрываем окно "Новое место"
function windowOpened() {
    openPopup(popupWindow);
}
function windowCloses() {
    closePopup(popupWindow);
}



// Открываем и закрываем окно "Редактировать профиль"
function toggleModalWindow() {
    openPopup(modalWindow);
    inputName.value = textName.textContent;
    inputVocation.value = textVocation.textContent;

}
function toggleModalWindowClose() {
    closePopup(modalWindow);
}

//Кнопка отправки данных на карточке "Редактировать профиль"
const elementForm = document.querySelector('.popup__form');
elementForm.addEventListener('submit', function(e) {
    e.preventDefault();
    textName.textContent = inputName.value;
    textVocation.textContent = inputVocation.value;
    closePopup(modalWindow);
});


// заполняем форму, добавляем на старницу
const cardForm = document.querySelector('.window__form');
cardForm.addEventListener('submit', function(event){
    event.preventDefault();
    newCard = createCard(cardNameInput.value, cardLinkInput.value);
    addCard(newCard);
    document.getElementById('window-form').reset();
    closePopup(popupWindow);
})

profileCreateBtn.addEventListener('click', windowOpened);
popupWindowCloseBtn.addEventListener('click', windowCloses);
profileEditBtn.addEventListener('click', toggleModalWindow);
popupCloseButton.addEventListener('click', toggleModalWindowClose);
imageClosedBtn.addEventListener('click', closedImage);