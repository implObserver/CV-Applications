import { Wrapper } from '../../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../../styles/LoadExample.css';
import { Load } from '../../../../../dataManagments/example/Load';
import { Clear } from '../../../../../dataManagments/clearResume/Clear';

export const LoadExample = () => {
  const clickHandler = () => {
    Clear();
    setTimeout(() => {
      Load('Peter Parker');
    }, 1);

  }

  return (
    <>
      <div
        tabIndex="0"
        className='load__example'
        onClick={clickHandler}>
        <Wrapper name='span__wrapper'>
          <span>Load Example</span>
        </Wrapper>
      </div>
    </>
  )
};