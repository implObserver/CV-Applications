import { Field } from '../../../prototypes/field/Field';

export const CompanyName = () => {
  const prototype = Field('CompanyName');

  const render = () => (
    <>
      <label htmlFor='company__name'>Company Name</label>

      <input
        type='text'
        id='company__name'
        name='user__company-name'
        placeholder='Enter Company Name'
        className='field'
        maxLength='100'
      />

      <span className='error' aria-live='polite'></span>
    </>
  );

  return Object.assign(prototype, { render });
};
