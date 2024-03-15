import settingsIcon from '../../../../assets/settings.svg';
import { Wrapper } from '../../../Wrapper';
import '../../../../styles/Customize.css';

export const Customize = () => {
  const svgWrapper = Wrapper('svg__wrapper', <img src={settingsIcon} className='settings__icon' alt='' />);
  const spanWrapper = Wrapper('span__wrapper', <span>Customize</span>);

  const render = () => {
    return (
      <>
        <div className='customize'>
          {svgWrapper.render()}
          {spanWrapper.render()}
        </div>
      </>
    )
  }

  return { render }
};
