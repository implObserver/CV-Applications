import { Field } from '../../../prototypes/form/field/Field';

export const StartDate = (formId) => {
  const props = {
    label: 'StartDate',
    type: 'date',
    id: `${formId}-start__date`,
    name: 'user__start-date',
    placeholder: 'Enter start date',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
