import { Field } from '../../../prototypes/field/Field';

export const FullName = () => {
    const prototype = Field('FullName');

    const render = () => (
        <>
            <label htmlFor='full_name'>
                Full name
                <span aria-label='required'>*</span>
            </label>

            <input
                type='text'
                id='full_name'
                name='user_full-name'
                placeholder='Enter full name...'
                className='field'
                maxLength='50'
                required
            />

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render });
};