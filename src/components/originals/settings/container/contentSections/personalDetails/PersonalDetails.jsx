import { DetailsForm } from '../../../../forms/detailsForm/DetailsForm';
import '../../../../../../styles/PersonalDetails.css';
import { State } from '../../../../../prototypes/state/State';
import { Props } from '../../../../../dataManagments/props/Global';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext';

export const PersonalDetails = () => {
  const drawnNode = State('form', 'button');
  const isVisible = State('visible__section', 'unvisible__section', Props.states.sections.defaultStates.sectionVisible);

  Object.assign(Props.states.personalDetails.states.drawnNode, drawnNode);
  Object.assign(Props.states.sections.objects.sectionsStyles.personalDetails, isVisible);

  return (
    <>
      <div className={`personal__details ${isVisible.getState()}`}>
        <PropsContext.Provider value={Props.states.personalDetails}>
          <DetailsForm></DetailsForm>
        </PropsContext.Provider>
      </div>
    </>
  );
};