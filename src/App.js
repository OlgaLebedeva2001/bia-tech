import React from 'react';
import './App.css';
import { days, dayNames } from './consts/index';
import Employee from './components/Employee';
import AddField from './components/AddField';
import AddUserPopup from './components/AddUserPopup';
function App() {
  const [isPopupAddUserOpen, setIsPopupAddUserOpen] = React.useState(false);
  const [users, setUser] = React.useState(['Петров И.А.', 'Степанов Л.А.', 'Семин М.С.']);
  function handleAddUserClick() {
    setIsPopupAddUserOpen(true);
  }

  function closeAllPopups() {
    setIsPopupAddUserOpen(false);
  }

  function handleAddUserSubmit({ name }) {
    setUser([...users, name]);
    closeAllPopups();
  }

  function removeUser(deleteUser) {
    setUser([...users.filter((user) => user !== deleteUser)]);
  }

  return (
    <div className="main">
      <div className="main__common-field">
        <div className="main__employee-field"></div>
        <div className="main__days">
          {dayNames.map((dayName) =>
            dayName === 'Сб' || dayName === 'Вс' ? (
              <p className="main__dayName-off">{dayName}</p>
            ) : (
              <p className="main__dayName">{dayName}</p>
            ),
          )}
        </div>
      </div>

      <div className="main__common-field">
        <div className="main__employee-field">Сотрудник</div>
        <div className="main__days">
          {days.map((day) =>
            day % 7 === 6 || day % 7 === 0 ? (
              <p className="main__dayName-off">{day}</p>
            ) : (
              <p className="main__dayName">{day}</p>
            ),
          )}
        </div>
      </div>
      {users.map((user) => (
        <Employee name={user} removeUser={removeUser} /* changeType={changeType} */ />
      ))}
      <AddField onAddUser={handleAddUserClick} />
      {/* <!-- Попап добавления юзера --> */}
      <AddUserPopup
        isOpen={isPopupAddUserOpen}
        onClose={closeAllPopups}
        onAddUser={handleAddUserSubmit}
      />
    </div>
  );
}

export default App;
