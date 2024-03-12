import { Toggle } from '../../../../toggle/Toggle';

export const FormAddButton = (className) => {
  const opener = Toggle('close__button', 'open__button');

  const changeState = () => {
    opener.switchState();
  };

  const render = (drawIt, form, changeState) => {
    return (
      <>
        <button
          className={`add__button ${opener.getState()}`}
          onClick={() => {
            drawIt('form');
            form.changeVisible();
            changeState();
          }}
        >
          <span>+ {className}</span>
        </button>
      </>
    );
  };

  return { render, changeState };
};
