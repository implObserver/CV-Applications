import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../styles/PersonalDetails.css';
import { State } from '../../../../prototypes/toggle/Toggle';

export const PersonalDetails = ({ props }) => {
  const drawnNode = State('form', 'button');
  Object.assign(props.states.drawnNode, drawnNode);
  return (
    <>
      <div className='personal__details'>
        <DetailsForm props={props}></DetailsForm>
      </div>
    </>
  );
};