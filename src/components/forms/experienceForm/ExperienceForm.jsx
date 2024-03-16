import { CompanyName } from './fields/CompanyName';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { PositionTitle } from './fields/PositionTitle';
import { StartDate } from './fields/StartDate';
import { Buttons } from './fields/Buttons';
import { DynamicForm } from '../../prototypes/form/DynamicForm';
import { Description } from './fields/Description';

export const ExperienceForm = () => {
  const fields = [
    CompanyName(),
    PositionTitle(),
    StartDate(),
    EndDate(),
    Location(),
    //Description(),
    //Buttons(),
  ];

  const prototype = DynamicForm('experience__form', fields);

  return Object.assign(prototype);
};
