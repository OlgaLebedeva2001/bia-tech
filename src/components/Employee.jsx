import React from 'react';
import '../App.css';
import { days } from '../consts/index';

const Employee = ({ name, removeUser }) => {
  const dayTypes = ['Рабочий день', 'Выходной', 'Отпуск', 'Больничный', 'Увольнение'];
  const [isDeletePopup, setIsDeletePopup] = React.useState(false);
  const [isOptionsPopup, setIsOptionsPopup] = React.useState(false);
  const [isSelectedDay, setIsSelectedDay] = React.useState([]);
  const [selectedDayType, setSelectedDayType] = React.useState(null);

  function selectFunc(day) {
    /* changeType({ days: setIsSelectedDay([...isSelectedDay, day]), type: selectedDayType }); */
    setIsSelectedDay([...isSelectedDay, day]);
    /* setSelectedDayType(null); */
    /* if (selectedDayType === 'Отпуск') {
    } */
  }

  return (
    <div className="main__common-field-employee">
      <div className="main__employee-field-employee">
        {name}
        <div className="main__icons">
          <div className="user-icon" onClick={() => setIsOptionsPopup(!isOptionsPopup)}>
            <div>
              {isOptionsPopup && (
                <ul className="optionPopup">
                  {dayTypes.map((dayType) => (
                    <li className="options" onClick={() => setSelectedDayType(dayType)}>
                      {dayType}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="options-icon" onClick={() => setIsDeletePopup(!isDeletePopup)}>
            <div>
              {isDeletePopup && (
                <div className="deletePopup" onClick={() => removeUser(name)}>
                  Удалить из графика
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="main__days">
        {days.map((day) =>
          day % 7 === 6 || day % 7 === 0 ? (
            <p
              className={`main__day-off ${isSelectedDay.includes(day) ? 'active' : ''} ${
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Отпуск' ? 'type_rest' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Больничный' ? 'type_pain' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Выходной' ? 'main__day-off' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Увольнение' ? 'type_work-off' : ''))
              }`}
              onClick={() => selectFunc(day)}>
              {'н'}
            </p>
          ) : (
            <p
              className={`main__day ${isSelectedDay.includes(day) ? 'active' : ''} ${
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Отпуск' ? 'type_rest' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Больничный' ? 'type_pain' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Выходной' ? 'main__day-off' : '')) ||
                (isSelectedDay.includes(day) &&
                  (selectedDayType === 'Увольнение' ? 'type_work-off' : ''))
              }`}
              onClick={() => selectFunc(day)}>
              {1}
            </p>
          ),
        )}
      </div>
    </div>
  );
};

export default Employee;
