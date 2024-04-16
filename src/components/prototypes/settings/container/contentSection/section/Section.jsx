import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { FormWrapper } from './formWrapper/FormWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = () => {
  return (
    <>
      <div className={`section__body`}>
        <FormWrapper></FormWrapper>
        <PlacesWrapper></PlacesWrapper>
        <ButtonWrapper></ButtonWrapper>
      </div>
    </>
  );
};