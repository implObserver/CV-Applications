export const DetailsForm = () => {
  return (
    <>
      <form id='details__form' action='#' method='post'>
        <h2>Personal Details!</h2>
        <ul className='fields'>
          <li>
            <label htmlFor='full_name'>
              Full name
              <span aria-label='required'>*</span>
            </label>

            <input
              type='text'
              id='full_name'
              name='user_full-name'
              placeholder='Enter full name...'
              className='field'
              maxLength='50'
              required
            />

            <span className='error' aria-live='polite'></span>
          </li>
          <li>
            <label htmlFor='mail'>
              Email
              <span className='recommended__text'> recommended</span>
            </label>

            <input
              type='email'
              id='mail'
              name='user__email'
              placeholder='Add email...'
              className='field'
              minLength='8'
            />

            <span className='error' aria-live='polite'></span>
          </li>
          <li>
            <label htmlFor='phone_number'>
              Phone number
              <span className='recommended__text'> recommended</span>
            </label>

            <input
              type='tel'
              id='phone_number'
              name='user_phone-number'
              className='field'
              placeholder="Enter \'+\' and phone number..."
              pattern='^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$'
            />

            <span className='error' aria-live='polite'></span>
          </li>
          <li>
            <label htmlFor='address'>
              Address
              <span className='recommended__text'> recommended</span>
            </label>

            <input
              type='text'
              id='address'
              name='user__address'
              placeholder='City, Country'
              className='field'
              minLength='8'
            />

            <span className='error' aria-live='polite'></span>
          </li>
        </ul>
      </form>
    </>
  );
};
