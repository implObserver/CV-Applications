import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';
import { Buttons } from './fields/Buttons';
import { DynamicForm } from '../../prototypes/form/DynamicForm';

export const EducationForm = () => {
  const id = 'education__form';

  const fields = [
    School(id),
    Degree(id),
    StartDate(id),
    EndDate(id),
    Location(id),
    Buttons(id),
  ];

  const prototype = DynamicForm(id, fields);

  return Object.assign(prototype);
};
