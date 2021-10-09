const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const profileEditBtn = document.querySelector('.profile__edit-button');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-opened');
}

profileEditBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);

const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');

const inputName = document.querySelector('.popup__text .popup__text-name');
const inputVocation = document.querySelector('.popup__text .popup__text-vocation');

inputName.value = textName.textContent;
inputVocation.value = textVocation.textContent;


document.querySelector('.popup__save').onclick = function(){

    textName.textContent = inputName.value;
    textVocation.textContent = inputVocation.value; 
}