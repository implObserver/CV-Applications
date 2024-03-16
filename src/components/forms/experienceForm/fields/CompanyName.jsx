import { Field } from '../../../prototypes/form/field/Field';
import Fields from '../../../JSON/Fields.json';

export const CompanyName = () => {
  const prototype = Field(Fields.experienceForm.companyName);
  return Object.assign(prototype);
};
