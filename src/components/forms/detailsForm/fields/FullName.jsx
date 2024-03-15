import { Field } from '../../../prototypes/form/field/Field';

export const FullName = (formId) => {
    const props = {
        label: 'FullName',
        type: 'text',
        id: `${formId}-full__name`,
        name: 'user__full-name',
        placeholder: 'Enter full name...',
        maxLength: 50,
        isRequied: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};