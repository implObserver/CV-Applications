import '../../../../styles/Field.css';
import { Field } from '../../../prototypes/form/field/Field';

export const PositionTitle = () => {
  const props = {
    label: 'PositionTitle',
    type: 'text',
    id: 'position__title',
    name: 'user__position-title',
    placeholder: 'Enter Position Title',
    maxLength: '100',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
