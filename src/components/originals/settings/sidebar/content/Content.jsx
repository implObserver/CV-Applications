import contentIcon from '../../../../../assets/content.svg';
import '../../../../../styles/Content.css';
import { Props } from '../../../../dataManagments/props/Global';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';

export const Content = () => {
  const sectionsProps = Props.states.sections.states;

  const clickHandler = () => {
    console.log('ddd')
    sectionsProps.drawnNode.setState('content');
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