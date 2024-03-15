import '../../../../styles/Field.css';
import { Field } from '../../../prototypes/form/field/Field';

export const School = (formId) => {
  const props = {
    label: 'School',
    type: 'text',
    id: `${formId}-school`,
    name: 'user__school',
    placeholder: 'Enter school / university',
    maxLength: 100,
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
