import { Field } from '../../../prototypes/form/field/Field';

export const Address = (formId) => {
    const props = {
        label: 'Address',
        type: 'text',
        id: `${formId}-address`,
        name: 'user__address',
        placeholder: 'City, Country',
        maxLength: 200,
        minLength: 8,
        isRecommended: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};