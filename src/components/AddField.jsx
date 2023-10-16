import React from 'react';
import { days } from '../consts/index';

const AddField = ({ onAddUser }) => {
  return (
    <div className="main__common-field-add">
      <div className="main__employee-field-add" onClick={onAddUser}>
        <div className="plus-icon"></div> Добавить сотрудника
      </div>
      <div className="main__days-add">
        {days.map((day) =>
          day % 7 === 6 || day % 7 === 0 ? (
            <p className="main__dayName-add-off"></p>
          ) : (
            <p className="main__dayName-add"></p>
          ),
        )}
      </div>
    </div>
  );
};

export default AddField;
