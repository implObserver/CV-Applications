import { useState } from "react";

export const Degree = () => {
    const [visible, setVisible] = useState('unvisible__field')

    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const render = (<>
        <li className={visible}>
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
        </li>
    </>)

    return { render, changeVisible }
}