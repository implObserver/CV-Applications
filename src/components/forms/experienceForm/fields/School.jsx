import '../../../../styles/Field.css'
import { Field } from "../../../prototypes/field/Field"

export const School = () => {
    const prototype = Field('School');

    const render = (<>
        <label htmlFor='school'>School</label>

        <input
            type='text'
            id='school'
            name='user__school'
            placeholder='Enter school / university'
            className='field'
            maxLength='100'
        />

        <span className='error' aria-live='polite'></span>
    </>)

    return Object.assign(prototype, { render });
}