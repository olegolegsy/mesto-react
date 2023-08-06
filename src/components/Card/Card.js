function Card({ card, onCardClick }) {
    return (
        <article className="element">
            <button type="button" className="element__delete" />
            <img src={card.link} alt={card.name} onClick={() => {
                onCardClick(card)
            }} className="element__img" />
            <div className="element__content">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                <button className="element__like" type="button" />
                <span className="element__counter">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;