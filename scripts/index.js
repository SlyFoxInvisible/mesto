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




//Создает массив с обработчиками для форм, чтобы откликались на нажатие кнопки мыши и клавишу Enter
var event_list=['click','keyup'];

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
        popupWindow.classList.remove('window_is-opened') ;

    })
})


// Вызов функций
profileEditBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindowClose);
profileCreateBtn.addEventListener('click', windowOpened);
popupWindowCloseBtn.addEventListener('click', windowCloses);



