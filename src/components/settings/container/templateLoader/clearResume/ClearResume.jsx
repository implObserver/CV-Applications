import { Wrapper } from '../../../../Wrapper';
import trashIcon from '../../../../../assets/trash.svg';
import '../../../../../styles/ClearResume.css';

export const ClearResume = () => {
  return (
    <>
      <div className='clear__resume'>
        <Wrapper name='svg__wrapper'>
          <img src={trashIcon} className='trash__icon' alt='' />
        </Wrapper>
        <Wrapper name='span__wrapper'>
          <span>Clear Resume</span>
        </Wrapper>
      </div>
    </>
  );
};
