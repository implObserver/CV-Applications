import { useState } from "react";

export const Location = () => {
    const [visible, setVisible] = useState('unvisible__field')

    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const render = (<>
        <li className={visible}>
            <label htmlFor='location'>Location</label>

            <input
                type='text'
                id='location'
                name='user__location'
                className='field'
                placeholder='Enter location'
            />

            <span className='error' aria-live='polite'></span>
        </li>
    </>)

    return { render, changeVisible }
}