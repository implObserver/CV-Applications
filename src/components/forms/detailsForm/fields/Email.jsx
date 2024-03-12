import { Field } from '../../../prototypes/field/Field';

export const Email = () => {
    const prototype = Field('Email');

    const render = () => (
        <>
            <label htmlFor='mail'>
                Email
                <span className='recommended__text'> recommended</span>
            </label>

            <input
                type='email'
                id='mail'
                name='user__email'
                placeholder='Add email...'
                className='field'
                minLength='8'
            />

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render });
};