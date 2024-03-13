import { Field } from '../../../prototypes/field/Field';

export const EndDate = () => {
  const props = {
    label: 'EndDate',
    type: 'date',
    id: 'end__date',
    name: 'user__end-date',
    placeholder: 'Enter end date',
  }

  const prototype = Field(props);

  return Object.assign(prototype);
};
