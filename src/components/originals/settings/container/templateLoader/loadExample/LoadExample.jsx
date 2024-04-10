import { Wrapper } from '../../../../../prototypes/details/wrapper/Wrapper';
import '../../../../../../styles/LoadExample.css';
import { Props } from '../../../../../dataManagments/props/Global';
import { fillTemplates } from '../../../../../dataManagments/dataFill/FillTemplates';

export const LoadExample = () => {
  const clickHandler = () => {
    fillTemplates();
    console.log(Props)
  }
  return (
    <>
      <div className='load__example'
        onClick={clickHandler}>
        <Wrapper name='span__wrapper'>
          <span>Load Example</span>
        </Wrapper>
      </div>
    </>
  )
};