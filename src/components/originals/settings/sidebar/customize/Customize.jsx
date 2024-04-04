import settingsIcon from '../../../../../assets/settings.svg';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../styles/Customize.css';
import { Props } from '../../../../dataManagments/props/Global';
import { SectionHandler } from '../../../../prototypes/settings/container/handlers/SectionsHandler';
import { ParametersHandler } from '../../../../prototypes/settings/container/handlers/ParametersHandler';

export const Customize = () => {
  const sectionsProps = Props.states.sections.states;

  const clickHandler = async () => {
    if (sectionsProps.drawnNode.getState() !== 'customize') {
      await SectionHandler.fillOfSections(false);
      sectionsProps.drawnNode.setState('customize');
      await ParametersHandler.fillOfParameters(true);
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
