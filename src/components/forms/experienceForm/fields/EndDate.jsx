import { Field } from "../../../prototypes/field/Field";

export const EndDate = () => {
    const prototype = Field('EndDate');

    const render = () => (<>
        <label htmlFor='end__date'>End Date</label>

        <input
            type='date'
            id='end__date'
            name='user__end-date'
            className='field'
            placeholder='Enter end date'
        />

        <span className='error' aria-live='polite'></span>
    </>)

    return Object.assign(prototype, { render });
}