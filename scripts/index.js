const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const profileEditBtn = document.querySelector('.profile__edit-button');
const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');
const inputName = document.querySelector('.popup__text .popup__input_text_name');
const inputVocation = document.querySelector('.popup__text .popup__input_text_vocation');
const popupWindow = document.querySelector('.window');
const popupWindowCloseBtn = document.querySelector('.window__close');
const windowCreateBtn = document.querySelector('.window__form');
const profileCreateBtn = document.querySelector('.profile__add-button');

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

const elementContainer = document.querySelector('.elements__content');
const elementTemplate = document.querySelector('#element__template').content;

const renderCard = (card) => {
    const cardElement = elementTemplate.cloneNode(true);
    const cardText = cardElement.querySelector('.elements__text').textContent = card.name;
    const cardImg = cardElement.querySelector('.elements__image').src = card.link;
    const cardItemCont = cardElement.querySelector('.elements__content-item');
    const cardDeleteButton = cardElement.querySelector('.elements__delete-button');

    elementContainer.append(cardElement);

cardDeleteButton.addEventListener('click', (event) =>{
    event.target.closest('.elements__content-item').remove();
});
};
initialCards.forEach(renderCard);








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
event_list.forEach(function (event){
    elementForm.addEventListener('submit', function(e) {
        e.preventDefault();
        textName.textContent = inputName.value;
        textVocation.textContent = inputVocation.value;
        modalWindow.classList.remove('popup_is-opened');
    });
})

document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('elements__like-button')) {
        const index = [...document.querySelectorAll('.elements__like-button')].indexOf(t);
        const count = document.querySelectorAll('.elements__like-button')[index];
        count.classList.toggle('elements__like-button_active');
    }
});

// Кнопка отправки формы карточки "Новое место"
// Пока что есть только закрытие окна
event_list.forEach(function (e){
    windowCreateBtn.addEventListener('submit', function (ev){
        ev.preventDefault();
        popupWindow.classList.remove('window_is-opened');
        const inputWindow = popupWindow.querySelectorAll('.window__input');
        inputWindow.value = '';
    })
});




// Вызов функций
profileEditBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindowClose);
profileCreateBtn.addEventListener('click', windowOpened);
popupWindowCloseBtn.addEventListener('click', windowCloses);


