import { useState } from "react";

export const EndDate = () => {
    const [visible, setVisible] = useState('unvisible__field')

    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const isVisible = () => {
        return visible === 'visible__field';
    }

    const render = (<>
        <li className={visible}>
            <label htmlFor='end__date'>End Date</label>

            <input
                type='date'
                id='end__date'
                name='user__end-date'
                className='field'
                placeholder='Enter end date'
            />

            <span className='error' aria-live='polite'></span>
        </li>
    </>)

    return { render, changeVisible, isVisible }
}