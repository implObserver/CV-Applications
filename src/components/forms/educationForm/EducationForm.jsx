import { useState } from 'react';
import '../../../styles/EducationForm.css'
import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';

export const EducationForm = () => {
  const fields = [School(), Degree(), StartDate(), EndDate(), Location()];
  const [toggle, setToggle] = useState(true);
  const [visible, setVisible] = useState('unvisible__form');

  const changeVisible = () => {
    setVisible(visible === 'visible__form' ? 'unvisible__form' : 'visible__form');
  }

  const timeout = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const changeVisibleFields = async () => {
    let buff = true;
    setToggle(!toggle);
    if (toggle) {
      for (let field of fields) {
        await timeout(100);
        if (buff) {
          changeVisible();
          buff = false;
        }
        field.changeVisible();
      }
    } else {
      let newFields = fields.reverse();
      for (let field of newFields) {
        await timeout(50);
        field.changeVisible();
      }
      await timeout(50);
      changeVisible();
    }
  }

  const render = () => (
    <>
      <form className={visible} id='education__form' action='#' method='post'>
        <ul>
          {fields.map((field) => {
            return field.render;
          })}
        </ul>
      </form>
    </>
  );

  return { render, changeVisibleFields }
};
