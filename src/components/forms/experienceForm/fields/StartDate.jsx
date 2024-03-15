import { Field } from '../../../prototypes/form/field/Field';

export const StartDate = () => {
  const props = {
    label: 'StartDate',
    type: 'date',
    id: 'start__date',
    name: 'user__start-date',
    placeholder: 'Enter start date',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
