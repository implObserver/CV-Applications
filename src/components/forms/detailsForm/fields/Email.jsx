import { Field } from '../../../prototypes/field/Field';

export const Email = () => {
    const props = {
        label: 'Email',
        type: 'email',
        id: 'mail',
        name: 'user__email',
        placeholder: 'Add email...',
        maxLength: 200,
        minLength: 8,
        isRecommended: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};