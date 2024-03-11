import { Field } from "../../../prototypes/field/Field";

export const Degree = () => {
    const prototype = Field('Degree');

    const render = (<>
        <label htmlFor='degree'>Degree</label>

        <input
            type='text'
            id='degree'
            name='user__degree'
            placeholder='Enter degree / Field of study'
            className='field'
            maxLength='100'
        />

        <span className='error' aria-live='polite'></span>
    </>)

    return Object.assign(prototype, { render });
}