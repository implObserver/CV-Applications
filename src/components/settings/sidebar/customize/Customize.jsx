import settingsIcon from '../../../../assets/settings.svg';
import { Wrapper } from '../../../Wrapper';
import '../../../../styles/Customize.css';

export const Customize = () => {
  return (
    <>
      <div className='customize'>
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
