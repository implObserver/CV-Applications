import { Field } from "../../../prototypes/field/Field";

export const Location = () => {
    const prototype = Field('Location');

    const render = () => (<>
        <label htmlFor='location'>Location</label>

        <input
            type='text'
            id='location'
            name='user__location'
            className='field'
            placeholder='Enter location'
        />

        <span className='error' aria-live='polite'></span>
    </>)

    return Object.assign(prototype, { render });
}