import { Field } from '../../../prototypes/form/field/Field';

export const CompanyName = () => {
  const props = {
    label: 'CompanyName',
    type: 'text',
    id: 'company__name',
    name: 'user__company-name',
    placeholder: 'Enter Company Name',
    maxLength: '100',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
