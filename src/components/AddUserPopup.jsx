import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddUserPopup = ({ isOpen, onClose, onAddUser }) => {
  const [user, setUser] = React.useState('');

  function handleUserSubmit(e) {
    e.preventDefault();

    onAddUser({
      name: user,
    });

    setUser('');
  }

  function handleUserChange(e) {
    setUser(e.target.value);
  }

  return (
    <PopupWithForm
      title="Добавить сотрудника"
      name="addPopup"
      btnSubmit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleUserSubmit}>
      <input
        value={user}
        onChange={handleUserChange}
        placeholder="ФИО"
        class="popup__input input__title"
        name="name"
        type="text"
      />
    </PopupWithForm>
  );
};

export default AddUserPopup;
