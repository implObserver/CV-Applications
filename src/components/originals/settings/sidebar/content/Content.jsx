import contentIcon from '../../../../../assets/content.svg';
import '../../../../../styles/Content.css';
import { Wrapper } from '../../../../prototypes/details/wrapper/Wrapper';
import { DropdownListsHandlers } from '../../../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers';

export const Content = () => {
  const clickHandler = async () => {
      await DropdownListsHandlers.parametersHandler.switchVisible(false);
      await DropdownListsHandlers.sectionsHandler.switchVisible(true);
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