import '../../../../styles/Field.css';
import { Field } from '../../../prototypes/field/Field';

export const PositionTitle = () => {
  const prototype = Field('PositionTitle');

  const render = () => (
    <>
      <label htmlFor='position__title'>Position Title</label>

      <input
        type='text'
        id='position__title'
        name='user__position-title'
        placeholder='Enter Position Title'
        className='field'
        maxLength='100'
      />

      <span className='error' aria-live='polite'></span>
    </>
  );

  return Object.assign(prototype, { render });
};
