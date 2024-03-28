import contentIcon from '../../../../../assets/content.svg';
import '../../../../../styles/Content.css';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';

export const Content = () => {
  return (
    <>
      <div className='content'>

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