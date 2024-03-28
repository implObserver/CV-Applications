import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../../styles/PersonalDetails.css';
import { State } from '../../../../../prototypes/state/State';
import { Props } from '../../../../../dataManagments/props/Global';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext';

export const PersonalDetails = () => {
  const drawnNode = State('form', 'button');

  Object.assign(Props.states.personalDetails.states.drawnNode, drawnNode);

  return (
    <>
      <div className='personal__details'>
        <PropsContext.Provider value={Props.states.personalDetails}>
          <DetailsForm></DetailsForm>
        </PropsContext.Provider>
      </div>
    </>
  );
};