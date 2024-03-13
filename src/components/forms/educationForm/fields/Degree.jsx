import { Field } from '../../../prototypes/field/Field';

export const Degree = () => {
  const props = {
    label: 'Degree',
    type: 'text',
    id: 'degree',
    name: 'user__degree',
    placeholder: 'Enter degree / Field of study',
    maxLength: 200
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
