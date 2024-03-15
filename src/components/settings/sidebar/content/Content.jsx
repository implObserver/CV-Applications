import contentIcon from '../../../../assets/content.svg';
import '../../../../styles/Content.css';
import { Wrapper } from '../../../Wrapper';

export const Content = () => {
  const svgWrapper = Wrapper('svg__wrapper', <img src={contentIcon} className='content__icon' alt='' />);
  const spanWrapper = Wrapper('span__wrapper', <span>Content</span>);

  const render = () => {
    return (
      <>
        <div className='content'>
          {svgWrapper.render()}
          {spanWrapper.render()}
        </div>
      </>
    )
  }
  return { render }
};
