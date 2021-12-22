const cardsContainer = document.querySelector('.elements__content');
const cardNameInput = document.querySelector('#input-window-text');
const cardLinkInput = document.querySelector('#input-window-src');
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup-profile');
const profileEditBtn = document.querySelector('.profile__edit-button');
const textNameProfile = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');
const inputName = document.querySelector('.popup__text .popup__input_text_name');
const inputVocation = document.querySelector('.popup__text .popup__input_text_vocation');
const popupWindow = document.getElementById('window');
const profileCreateBtn = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('#window-save');
const imageOpened = document.querySelector('#popup-photo');
const imageOpenedText = document.querySelector('.popup-photo__text');
const imageOpenedImg = document.querySelector('.popup-photo__image');
const elementForm = document.querySelector('#popup-form');
const cardElementTemplate = document.querySelector('#element__template').content;
const cardForm = document.querySelector('#window-form');


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
    document.addEventListener('keydown', closeEsc);
}
//Функция закрытия попапов
function closePopup(popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeEsc);
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

// карточка на страницу
function addCard (newCard) {
    cardsContainer.prepend(newCard);
}

// работа с массивом
function renderCards (array) {
    array.forEach((item) => {
        const newCard = createCard(item.name, item.link);
        addCard(newCard);
    });
}
renderCards(initialCards);

// Открываем окно "Редактировать профиль"
function openProfilePopup() {
    openPopup(profilePopup);
    inputName.value = textNameProfile.textContent;
    inputVocation.value = textVocation.textContent;

}


//Кнопка отправки данных на карточке "Редактировать профиль"
elementForm.addEventListener('submit', function(e) {
    e.preventDefault();
    textNameProfile.textContent = inputName.value;
    textVocation.textContent = inputVocation.value;
    closePopup(profilePopup);
});


// заполняем форму, добавляем на старницу

cardForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newCard = createCard(cardNameInput.value, cardLinkInput.value);
    addCard(newCard);
    cardForm.reset();
    closePopup(popupWindow);
})


profileCreateBtn.addEventListener('click', () =>{
   saveButton.setAttribute('disabled', 'disabled');
   saveButton.classList.add('popup__save_disabled');
    openPopup(popupWindow);
});

profileEditBtn.addEventListener('click', openProfilePopup);

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})