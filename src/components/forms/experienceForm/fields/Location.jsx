import { Field } from '../../../prototypes/form/field/Field';
import Fields from '../../../JSON/Fields.json';

export const Location = () => {
  const prototype = Field(Fields.experienceForm.location);
  return Object.assign(prototype);
};
