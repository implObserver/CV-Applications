import { Wrapper } from '../../../../Wrapper';
import '../../../../../styles/LoadExample.css';

/* export const LoadExample = () => {
  const spanWrapper = Wrapper('span__wrapper', <span>Load Example</span>);
  const render = () => {
    return (
      <>
        <div className='load__example'>
          {spanWrapper.render()}
        </div>
      </>
    )
  }
  return { render }
};
*/

export const LoadExample = () => {
  return (
    <>
      <div className='load__example'>
        <Wrapper name='span__wrapper'>
          <span>Load Example</span>
        </Wrapper>
      </div>
    </>
  )
};