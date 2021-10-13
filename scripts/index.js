const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const profileEditBtn = document.querySelector('.profile__edit-button');
const textName = document.querySelector('.profile__info .profile__name');
const textVocation = document.querySelector('.profile__info .profile__vocation');
const inputName = document.querySelector('.popup__text .popup__text-name');
const inputVocation = document.querySelector('.popup__text .popup__text-vocation');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-opened');
}





inputName.value = textName.textContent;
inputVocation.value = textVocation.textContent;


document.querySelector('.popup__save').onclick = function(){
    event.preventDefault();
    textName.textContent = inputName.value;
    textVocation.textContent = inputVocation.value; 
}

profileEditBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);