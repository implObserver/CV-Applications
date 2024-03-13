import { Field } from '../../../prototypes/field/Field';

export const FullName = () => {
    const props = {
        label: 'FullName',
        type: 'text',
        id: 'full_name',
        name: 'user_full-name',
        placeholder: 'Enter full name...',
        maxLength: 50,
        isRequied: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};