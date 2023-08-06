import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";

import { useState } from "react";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  return (
    <div className="page__content">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      ></Main>

      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          name="name"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__input-error name-error" />
        <input
          type="text"
          className="popup__input popup__input_type_about"
          name="about"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error about-error" />
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        button="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          placeholder="Название"
          type="text"
          className="popup__input popup__input_type_title"
          name="title"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__input-error title-error" />
        <input
          placeholder="Ссылка на картинку"
          type="url"
          className="popup__input popup__input_type_link"
          name="link"
          required=""
        />
        <span className="popup__input-error link-error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          required=""
        />
        <span className="popup__input-error avatar-error" />
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        button="Да"
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
}

export default App;
