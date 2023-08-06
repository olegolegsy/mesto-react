import { useEffect, useState } from "react";

import api from "../../utils/Api";

import Card from "../Card/Card";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        cardsData.forEach((card) => {
          card.idMy = userData._id;
        });

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cardsData);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-edt-btn" onClick={onEditAvatar}>
            <div className="profile__avatar-cover" />
            <img
              src={userAvatar}
              alt="Аватарка. Avatar."
              className="profile__avatar"
            />
          </div>
          <div className="profile__text">
            <div className="profile__headline">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
