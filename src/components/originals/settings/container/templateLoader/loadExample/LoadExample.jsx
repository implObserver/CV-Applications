import { Wrapper } from '../../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../../styles/LoadExample.css';
import { Load } from '../../../../../dataManagments/example/Load';

export const LoadExample = () => {
  const clickHandler = () => {
    Load('Peter Parker');
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