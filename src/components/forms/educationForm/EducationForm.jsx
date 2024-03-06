import { useState } from 'react';
import '../../../styles/EducationForm.css'
import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';

export const EducationForm = () => {
  const [fields, setFields] = useState([School(), Degree(), StartDate(), EndDate(), Location()]);
  const [visibleFields, setVisibleFields] = useState([]);

  const timeout = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  const changeVisibleFields = async () => {
    let newVisibleFields = [];
    if (visibleFields.length === 0) {
      for (let field of fields) {
        await timeout(200);
        field.changeVisible()
        newVisibleFields.push(field);
      }
      setFields(newVisibleFields)
      setVisibleFields(newVisibleFields);
    } else {
      console.log(visibleFields)
      for (let field of visibleFields) {
        await timeout(200);
        field.changeVisible();
      }
      setVisibleFields([]);
    }
  }

  const render = () => (
    <>
      <form id='education__form' action='#' method='post'>
        {fields.map((field) => {
          return field.render;
        })}
      </form>
    </>
  );

  return { render, changeVisibleFields }
};
