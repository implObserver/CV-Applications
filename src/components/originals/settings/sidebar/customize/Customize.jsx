import settingsIcon from '../../../../../assets/settings.svg';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../styles/Customize.css';
import { appModel } from '../../../../../main';
import { ParametersHandler } from '../../../../prototypes/settings/container/handlers/ParametersHandler';
import { SectionHandler } from '../../../../prototypes/settings/container/handlers/SectionsHandler';
import { later } from '../../../../../helper/Timeout';

export const Customize = () => {

  const sectionsProps = appModel.settings.container.sections;
  const clickHandler = async () => {
    if (sectionsProps.states.drawnNode.getState() !== 'customize') {
      //console.log(Props.states.education.forms['education__form'].defaultStates.field)
      await SectionHandler.fillOfSections(false);
      
    }
  }

  return (
    <>
      <div className='customize' onClick={clickHandler}>
        <Wrapper name='svg__wrapper'>
          <img src={settingsIcon} className='settings__icon' alt='' />
        </Wrapper>

        <Wrapper name='span__wrapper'>
          <span>Customize</span>
        </Wrapper>
      </div>
    </>
  )
};
