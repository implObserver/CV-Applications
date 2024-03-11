import { useState } from 'react';
import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';
import { Buttons } from './fields/Buttons';

export const EducationForm = (section) => {
  const changeVisible = () => {
    setVisible(visible === 'visible__form' ? 'unvisible__form' : 'visible__form');
    changeVisibleFields();
  }

  const changeVisibleFields = async () => {
    setToggle(!toggle);
    toggle ? addFields() : removeFields();
  }

  const fields = [School(), Degree(), StartDate(), EndDate(), Location(), Buttons(changeVisible, section)];
  const [toggle, setToggle] = useState(true);
  const [keys, setKeys] = useState([]);
  const [visible, setVisible] = useState('unvisible__form');

  const timeout = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const addFields = async () => {
    for (let field of fields) {
      let key = field.getKey();
      if (!keys.includes(key)) {
        await timeout(50);
        field.changeVisible();
        keys.push(field.getKey());
      }
    }
    setKeys(keys);
  }

  const removeFields = async () => {
    let newFields = fields.reverse();
    for (let field of newFields) {
      let key = field.getKey();
      if (keys.includes(key)) {
        await timeout(50);
        field.changeVisible();
        keys.splice(keys.indexOf(key), 1);
      }
    }
    setKeys(keys);
  }

  const render = () => (
    <>
      <form className={visible} id='education__form' action='#' method='post'>
        <ul>
          {fields.map((field) => {
            return <li key={field.getKey()} className={field.getVisible()}>
              {field.render}
            </li>
          })}
        </ul>
      </form>
    </>
  );

  return { render, changeVisible, changeVisibleFields }
};
