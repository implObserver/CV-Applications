import { Field } from '../../../prototypes/form/field/Field';

export const Email = (formId) => {
    const props = {
        label: 'Email',
        type: 'email',
        id: `${formId}-mail`,
        name: 'user__email',
        placeholder: 'Add email...',
        maxLength: 200,
        minLength: 8,
        isRecommended: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};