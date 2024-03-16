import '../../../../styles/Field.css';
import { Field } from '../../../prototypes/form/field/Field';
import Fields from '../../../JSON/Fields.json';

export const PositionTitle = () => {
  const prototype = Field(Fields.experienceForm.positionTitle);
  return Object.assign(prototype);
};
