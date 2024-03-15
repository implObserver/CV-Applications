import { Wrapper } from '../../../../Wrapper';
import trashIcon from '../../../../../assets/trash.svg';
import '../../../../../styles/ClearResume.css';

export const ClearResume = () => {
  const svgWrapper = Wrapper('svg__wrapper', <img src={trashIcon} className='trash__icon' alt='' />);
  const spanWrapper = Wrapper('span__wrapper', <span>Clear Resume</span>);

  const render = () => {
    return (
      <>
        <div className='clear__resume'>
          {svgWrapper.render()}
          {spanWrapper.render()}
        </div>
      </>
    )
  }
  return { render };
};
