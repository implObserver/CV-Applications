import { Field } from '../../../prototypes/form/field/Field';

export const Location = (formId) => {
  const props = {
    label: 'Location',
    type: 'text',
    id: `${formId}-location`,
    name: 'user__location',
    placeholder: 'Enter location',
    maxLength: 100,
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
