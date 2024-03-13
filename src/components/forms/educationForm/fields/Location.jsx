import { Field } from '../../../prototypes/field/Field';

export const Location = () => {
  const props = {
    label: 'Location',
    type: 'text',
    id: 'location',
    name: 'user__location',
    placeholder: 'Enter location',
    maxLength: 100,
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
