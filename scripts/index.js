const profilePopup = document.querySelector('.profile');
const nameInput = document.querySelector('.popup__input_text_name');
const jobInput = document.querySelector('.popup__input_text_vocation');
const editButton = document.querySelector('.profile__save');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__vocation');
const cardsContainer = document.querySelector('.elements__content');
const cardNameInput = document.querySelector('.window__input_text');
const cardLinkInput = document.querySelector('.window__input_text_src');
//const imagePopup = document.querySelector('.popup__type_image');
const imagePopupCloseButton = document.querySelector('.window__close');
const modalWindow = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');
const inputName = document.querySelector('.popup__text .popup__input_text_name');
const inputVocation = document.querySelector('.popup__text .popup__input_text_vocation');
const popupWindow = document.querySelector('.window');
const windowCreateBtn = document.querySelector('.window__form');
const profileCreateBtn = document.querySelector('.profile__add-button');
const popupWindowCloseBtn = document.querySelector('.window__close');
//const openImagePopup = document.querySelectorAll('.elements__image');
const imageOpened = document.querySelector('.popup__photo');
const imageClosedBtn = document.querySelector('.popup__photo_button');
const imageOpenedText = document.querySelector('.popup__photo_text');
const imageOpenedImg = document.querySelector('.popup__photo_image');








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

function createCard (cardName, cardLink){
    const card = cardElementTemplate.querySelector('.elements__content-item').cloneNode(true);
    const cardTitle = card.querySelector('.elements__text');
    const cardImg = card.querySelector('.elements__image');

    const cardDeleteButton = card.querySelector('.elements__delete-button');

    cardTitle.textContent = cardName;
    cardImg.src = cardName;
    cardImg.src = cardLink;


    cardDeleteButton.addEventListener('click', () => card.remove());



//cardImg.addEventListener('click', (e) => {
//		e.preventDefault();
//
//	})

//Открывает картинку в модальном окне
    function renderCardPopup() {

        imageOpened.classList.add('popup__photo_opened');
        imageOpenedImg.src = cardImg.src;
        imageOpenedImg.alt = cardImg.alt;
        imageOpenedText.textContent = cardTitle.textContent;
    }



    cardImg.addEventListener('click', renderCardPopup);

    // закрыть поп-ап фото
//  imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));



    return card;
}

function closedImage () {
    imageOpened.classList.remove('popup__photo_opened');

}


// Закрытие попапов по кнопке Escape
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        popupWindow.classList.remove('window_is-opened');
        modalWindow.classList.remove('popup_is-opened');
        imageOpened.classList.remove('popup__photo_opened');
    }
})

//Кнопка лайка
document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('elements__like-button')) {
        const index = [...document.querySelectorAll('.elements__like-button')].indexOf(t);
        const count = document.querySelectorAll('.elements__like-button')[index];
        count.classList.toggle('elements__like-button_active');
    }
});



let newCard;

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



//Создает массив с обработчиками для форм, чтобы откликались на нажатие кнопки мыши и клавишу Enter
const event_list=['click','keyup'];

// Открываем и закрываем окно "Новое место"
function windowOpened() {
    popupWindow.classList.add('window_is-opened');
}
function windowCloses() {
    popupWindow.classList.remove('window_is-opened');
}



// Открываем и закрываем окно "Редактировать профиль"
function toggleModalWindow() {
    modalWindow.classList.add('popup_is-opened');
    inputName.value = textName.textContent;
    inputVocation.value = textVocation.textContent;

}
function toggleModalWindowClose() {
    modalWindow.classList.remove('popup_is-opened');
}



//Кнопка отправки данных на карточке "Редактировать профиль"
const elementForm = document.querySelector('.popup__form');
elementForm.addEventListener('submit', function(e) {
    e.preventDefault();
    textName.textContent = inputName.value;
    textVocation.textContent = inputVocation.value;
    modalWindow.classList.remove('popup_is-opened');
});


// заполняем форму, добавляем на старницу
const cardForm = document.querySelector('.window__form');
cardForm.addEventListener('submit', function(event){
    event.preventDefault();
    newCard = createCard(cardNameInput.value, cardLinkInput.value);

    addCard(newCard);

    cardNameInput.value = '';
    cardLinkInput.value = '';

    popupWindow.classList.remove('window_is-opened');


})




profileCreateBtn.addEventListener('click', windowOpened);
popupWindowCloseBtn.addEventListener('click', windowCloses);

profileEditBtn.addEventListener('click', toggleModalWindow);
popupCloseButton.addEventListener('click', toggleModalWindowClose);
//popupCloseButton.addEventListener('click', () => closePopup(profilePopup));
imageClosedBtn.addEventListener('click', closedImage);
