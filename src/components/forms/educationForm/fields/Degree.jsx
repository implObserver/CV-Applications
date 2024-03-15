import { Field } from '../../../prototypes/form/field/Field';

export const Degree = (formId) => {
  const props = {
    label: 'Degree',
    type: 'text',
    id: `${formId}-degree`,
    name: 'user__degree',
    placeholder: 'Enter degree / Field of study',
    maxLength: 200
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
