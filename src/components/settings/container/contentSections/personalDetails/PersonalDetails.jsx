import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../styles/PersonalDetails.css';
import { useEffect } from 'react';

export const PersonalDetails = () => {
  const form = DetailsForm();

  useEffect(() => {
    return () => {
      form.changeVisible();
    }
  }, []);

  const render = () => {
    return (
      <>
        <div className='personal__details'>
          {form.render()}
        </div>
      </>
    );
  }
  return { render }
};
