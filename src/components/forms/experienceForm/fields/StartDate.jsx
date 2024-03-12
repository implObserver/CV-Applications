import { Field } from '../../../prototypes/field/Field';

export const StartDate = () => {
  const prototype = Field('StartDate');

  const render = () => (
    <>
      <label htmlFor='start__date'>Start Date</label>

      <input
        type='date'
        id='start__date'
        name='user__start-date'
        className='field'
        placeholder='Enter start date'
      />

      <span className='error' aria-live='polite'></span>
    </>
  );

  return Object.assign(prototype, { render });
};
