import contentIcon from '../../../../../assets/content.svg';
import { later } from '../../../../../helper/Timeout';
import '../../../../../styles/Content.css';
import { Props } from '../../../../dataManagments/props/Global';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import { ParametersHandler } from '../../../../prototypes/settings/container/handlers/ParametersHandler';
import { SectionHandler } from '../../../../prototypes/settings/container/handlers/SectionsHandler';

export const Content = () => {
  const sectionsProps = Props.states.sections.states;

  const clickHandler = async () => {
    if (sectionsProps.drawnNode.getState() !== 'content') {
      await ParametersHandler.fillOfParameters(false);
      await later(500).promise
      sectionsProps.drawnNode.setState('content');
      await SectionHandler.fillOfSections(true);
    }
  }

  return (
    <>
      <div className='content' onClick={clickHandler}>

        <Wrapper name='svg__wrapper'>
          <img src={contentIcon} className='content__icon' alt='' />
        </Wrapper>

        <Wrapper name='span__wrapper'>
          <span>Content</span>
        </Wrapper>

      </div>
    </>
  )
}