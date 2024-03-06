import { useState } from "react"
import '../../../../styles/Field.css'

export const School = () => {
    const [visible, setVisible] = useState('unvisible__field')
  
    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const render = (<>
        <li className={visible}>
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
        </li>
    </>)

    return { render, changeVisible }
}