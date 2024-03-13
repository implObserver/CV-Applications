import { ImaginaryField } from '../../../prototypes/field/Field';

export const Description = () => {
    const prototype = ImaginaryField('Description');

    const render = () => (
        <>
            <label htmlFor='description'>Description</label>

            <textarea
                id='description'
                name='user__description'
                className='field'
                placeholder='Enter Description'
            />

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render });
};