function Card({ card, onCardClick, onDelete }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article className="element">
      <button type="button" className="element__delete" onClick={onDelete} />
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="element__img"
      />
      <div className="element__content">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" />
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
