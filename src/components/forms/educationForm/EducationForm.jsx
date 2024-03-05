export const EducationForm = () => {
  return (
    <>
      <form id='education__form' action='#' method='post'>
        <ul className='fields'>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
            <label htmlFor='location'>Location</label>

            <input
              type='date'
              id='location'
              name='user__location'
              className='field'
              placeholder='Enter location'
            />

            <span className='error' aria-live='polite'></span>
          </li>
        </ul>
      </form>
    </>
  );
};
