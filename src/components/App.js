import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";

import { useCallback, useState } from "react";

function App() {
  // ================================================================== handle funcs ==================================================================
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    setEventListeners();
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    setEventListeners();
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    setEventListeners();
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    setEventListeners();
  };

  const handleConfirmClick = () => {
    setIsConfirmPopupOpen(true);
    setEventListeners();
  };

  const setPopupStates = useCallback(() => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
  }, []);

  // ================================================================== states ==================================================================
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  // ================================================================== listeners ==================================================================
  const handleKeydownEsc = useCallback(
    (evt) => {
      if (evt.key === "Escape") {
        setPopupStates();
        document.removeEventListener("keydown", handleKeydownEsc);
      }
    },
    [setPopupStates]
  );

  const setEventListeners = () => {
    document.addEventListener("keydown", handleKeydownEsc);
  };

  const closeAllPopups = useCallback(() => {
    setPopupStates();
    document.removeEventListener("keydown", handleKeydownEsc);
  }, [setPopupStates, handleKeydownEsc]);

  // ================================================================== component ==================================================================
  return (
    <div className="page__content">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
        onConfirm={handleConfirmClick}
      ></Main>

      <Footer />

      {/* ================================== profile ================================== */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          placeholder="Имя"
          type="text"
          className="popup__input popup__input_type_name"
          name="name"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__input-error name-error" />
        <input
          placeholder="Чем вы занимаетесь?"
          type="text"
          className="popup__input popup__input_type_about"
          name="about"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error about-error" />
      </PopupWithForm>

      {/* ================================== place ================================== */}
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

      {/* ================================== avatar ================================== */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          placeholder="Ссылка на картинку"
          type="url"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          required=""
        />
        <span className="popup__input-error avatar-error" />
      </PopupWithForm>

      {/* ================================== confirm ================================== */}
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        button="Да"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>

      {/* ================================== image ================================== */}
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
}

export default App;
