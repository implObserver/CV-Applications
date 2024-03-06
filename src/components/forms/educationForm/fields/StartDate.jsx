import { useState } from "react";

export const StartDate = () => {
    const [visible, setVisible] = useState('unvisible__field')

    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const isVisible = () => {
        return visible === 'visible__field';
    }

    const render = (<>
        <li className={visible}>
            <label htmlFor='start__date'>Start Date</label>

            <input
                type='date'
                id='start__date'
                name='user__start-date'
                className='field'
                placeholder='Enter start date'
            />

            <span className='error' aria-live='polite'></span>
        </li>
    </>)

    return { render, changeVisible, isVisible }
}