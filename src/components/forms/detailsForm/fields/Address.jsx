import { Field } from '../../../prototypes/field/Field';

export const Address = () => {
    const props = {
        label: 'Address',
        type: 'text',
        id: 'address',
        name: 'user__address',
        placeholder: 'City, Country',
        maxLength: 200,
        minLength: 8,
        isRecommended: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};