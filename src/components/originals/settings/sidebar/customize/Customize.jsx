import settingsIcon from '../../../../../assets/settings.svg';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../styles/Customize.css';
import { DropdownListsHandlers } from '../../../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers';

export const Customize = () => {
  const clickHandler = async () => {
      await DropdownListsHandlers.sectionsHandler.switchVisible(false);
      await DropdownListsHandlers.parametersHandler.switchVisible(true);
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
