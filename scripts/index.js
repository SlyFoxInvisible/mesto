const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');

const profileEditBtn = document.querySelector('.profile__edit-button');
const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');

const inputName = document.querySelector('.popup__text .popup__input_text_name');
const inputVocation = document.querySelector('.popup__text .popup__input_text_vocation');


function toggleModalWindow() {
    modalWindow.classList.add('popup_is-opened');
    inputName.value = textName.textContent;
    inputVocation.value = textVocation.textContent;
}

function toggleModalWindowClose() {
    modalWindow.classList.remove('popup_is-opened');
}

const elementForm = document.querySelector('.popup__form');
elementForm.addEventListener('submit', function(e) {
    e.preventDefault();
    textName.textContent = inputName.value;
    textVocation.textContent = inputVocation.value;
    modalWindow.classList.remove('popup_is-opened');
});




profileEditBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindowClose);



