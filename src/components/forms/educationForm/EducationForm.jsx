import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';
import { Buttons } from './fields/Buttons';
import { DynamicForm } from '../../prototypes/form/DynamicForm';

export const EducationForm = () => {
  const fields = [
    School(),
    Degree(),
    StartDate(),
    EndDate(),
    Location(),
    Buttons(),
  ];

  const prototype = DynamicForm('education__form', fields);

  return Object.assign(prototype);
};
