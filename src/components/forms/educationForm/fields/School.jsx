import '../../../../styles/Field.css';
import { Field } from '../../../prototypes/field/Field';

export const School = () => {
  const props = {
    label: 'School',
    type: 'text',
    id: 'school',
    name: 'user__school',
    placeholder: 'Enter school / university',
    maxLength: 100,
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
