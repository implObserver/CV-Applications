import { Wrapper } from '../../../../../prototypes/details/wrapper/Wrapper';
import trashIcon from '../../../../../../assets/trash.svg';
import '../../../../../../styles/ClearResume.css';
import { Clear } from '../../../../../dataManagments/clearResume/Clear';

export const ClearResume = () => {
  const clickHandler = () => {
    Clear();
  }

  return (
    <>
      <div
        tabIndex="0"
        className='clear__resume'
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