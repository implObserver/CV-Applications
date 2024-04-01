import settingsIcon from '../../../../../assets/settings.svg';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../styles/Customize.css';
import { Props } from '../../../../dataManagments/props/Global';

export const Customize = () => {
  const sectionsProps = Props.states.sections.states;
  
  const clickHandler = () => {
    console.log('aaa')
    sectionsProps.drawnNode.setState('customize');
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
