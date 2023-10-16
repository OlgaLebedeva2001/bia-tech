import React from 'react';

function PopupWithForm({ title, name, btnSubmit, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup ${name} ${isOpen === true ? 'popup_opened' : ''}`}>
      <div class="popup__container">
        <p class="popup__title">{title}</p>
        <form onSubmit={onSubmit} class="popup__form" name={name} action="">
          {children}
          <button class="popup__submit">{btnSubmit}</button>
        </form>
        <div onClick={onClose} class="popup__close"></div>
      </div>
    </div>
  );
}

export default PopupWithForm;
