import contentIcon from '../../../../../assets/content.svg';
import { later } from '../../../../../helper/Timeout';
import { appModel } from '../../../../../main';
import '../../../../../styles/Content.css';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import { ParametersHandler } from '../../../../prototypes/settings/container/handlers/ParametersHandler';
import { SectionHandler } from '../../../../prototypes/settings/container/handlers/SectionsHandler';

export const Content = () => {
  const sectionsProps = appModel.settings.container.sections;
  const clickHandler = async () => {
    if (sectionsProps.states.drawnNode.getState() !== 'content') {
      await ParametersHandler.fillOfParameters(false);
      sectionsProps.states.drawnNode.setState('content');
      await later(10).promise
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