import { timeout } from "../../../helper/Timeout";

export const Save = () => {
  const render = (changeVisible, drawIt, placesWrapper, getValues, masterKey) => (
    <>
      <input
        type='button'
        id='save'
        name='education__save'
        className='save'
        value='save'
        onClick={async () => {
          const values = getValues();
          placesWrapper.update(masterKey, values);
          changeVisible();
          await timeout(450);
          drawIt('button');
        }}
      />
    </>
  );

  return { render };
};