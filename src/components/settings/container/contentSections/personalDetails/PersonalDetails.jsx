import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../styles/PersonalDetails.css';
import { State } from '../../../../prototypes/toggle/Toggle';

/*export const PersonalDetails = () => {
  const form = DetailsForm();

  useEffect(() => {
    return () => {
      
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
*/

export const PersonalDetails = ({ props }) => {
  const drawnNode = State('form', 'button');

  const personalDetails = {
    states: {
      drawnNode: drawnNode,
    }
  }

  Object.assign(props.states, { personalDetails });

  return (
    <>
      <div className='personal__details'>
        <DetailsForm props={props.states.personalDetails}></DetailsForm>
      </div>
    </>
  );
};