import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Form } from './form/Form';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = () => {
  const props = usePropsContext();
  return (
    <>
      <div className={`section__body`}>
        <Form id={props.id}></Form>
        <PlacesWrapper></PlacesWrapper>
        <ButtonWrapper></ButtonWrapper>
      </div>
    </>
  );
};