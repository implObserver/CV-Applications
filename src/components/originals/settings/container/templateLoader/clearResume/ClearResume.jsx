import { Wrapper } from '../../../../../prototypes/details/wrapper/Wrapper';
import trashIcon from '../../../../../../assets/trash.svg';
import '../../../../../../styles/ClearResume.css';
import { removeSections } from '../../../../../dataManagments/dataRemove/RemoveSections';

export const ClearResume = () => {
  const clickHandler = () => {
    removeSections();
  }

  return (
    <>
      <div className='clear__resume'
        onClick={clickHandler}>
        <Wrapper name='svg__wrapper'>
          <img src={trashIcon} className='trash__icon' alt='' />
        </Wrapper>

        <Wrapper name='span__wrapper'>
          <span>Clear Resume</span>
        </Wrapper>
      </div>
    </>
  )
}