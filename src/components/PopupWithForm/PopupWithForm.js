function PopupWithForm({
  name,
  title,
  button,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="popup__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className="popup__cls-btn popup__cls-btn_type_profile"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_${name}`}
          name={name}
          noValidate=""
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__save-btn popup__save-btn_disabled"
            type="submit"
            //disabled=""
          >
            {button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
