import { Field } from '../../../prototypes/form/field/Field';
import Fields from '../../../JSON/Fields.json';

export const EndDate = () => {
  const prototype = Field(Fields.experienceForm.endDate);
  return Object.assign(prototype);
};
