import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../../styles/PersonalDetails.css';
import { State } from '../../../../../prototypes/state/State';
import { Props } from '../../../../../dataManagments/props/Global';

export const PersonalDetails = () => {
  const drawnNode = State('form', 'button');
  
  Object.assign(Props.states.personalDetails.states.drawnNode, drawnNode);
  
  return (
    <>
      <div className='personal__details'>
        <DetailsForm id={'personalDetails'}></DetailsForm>
      </div>
    </>
  );
};