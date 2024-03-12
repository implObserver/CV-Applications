import { Field } from '../../../prototypes/field/Field';

export const Address = () => {
    const prototype = Field('Address');

    const render = () => (
        <>
            <label htmlFor='address'>
                Address
                <span className='recommended__text'> recommended</span>
            </label>

            <input
                type='text'
                id='address'
                name='user__address'
                placeholder='City, Country'
                className='field'
                minLength='8'
            />

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render });
};