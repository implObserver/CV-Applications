import { Field } from '../../../prototypes/form/field/Field';

export const EndDate = (formId) => {
  const props = {
    label: 'EndDate',
    type: 'date',
    id: `${formId}-end__date`,
    name: 'user__end-date',
    placeholder: 'Enter end date',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
