import { Field } from '../../../prototypes/field/Field';

export const PhoneNumber = () => {
    const prototype = Field('PhoneNumber');

    const render = () => (
        <>
            <label htmlFor='phone_number'>Phone number
                <span className='recommended__text'> recommended</span>
            </label>

            <input
                type='tel'
                id='phone_number'
                name='user_phone-number'
                className='field'
                placeholder="Enter \'+\' and phone number..."
                pattern='^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$'
            />

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render });
};