import { Field } from '../../../prototypes/field/Field';

export const PhoneNumber = () => {

    const regex = new RegExp('^\\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\\W*\\d){0,13}\\d$');

    const props = {
        label: 'PhoneNumber',
        type: 'tel',
        id: 'phone_number',
        placeholder: 'Enter \'+\' and phone number...',
        pattern: regex,
        isRecommended: true,
    }

    const prototype = Field(props);

    return Object.assign(prototype);
};