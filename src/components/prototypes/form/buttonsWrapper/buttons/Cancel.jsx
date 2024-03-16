import { timeout } from "../../../../helper/Timeout";

export const Cancel = (changeVisible, drawIt) => {
  <>
    <input
      type='button'
      id='cancel'
      name='education__cancel'
      className='cancel'
      value='Cancel'
      onClick={async () => {
        changeVisible();
        await timeout(450);
        drawIt('button');
      }}
    />
  </>
};
