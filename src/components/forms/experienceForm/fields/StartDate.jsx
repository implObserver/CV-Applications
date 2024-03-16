import { Field } from '../../../prototypes/form/field/Field';
import Fields from '../../../JSON/Fields.json';

export const StartDate = () => {
  const prototype = Field(Fields.experienceForm.startDate);
  return Object.assign(prototype);
};
