import '../../../../../styles/ButtonWrapper.css';
import { State } from '../../../toggle/Toggle';

export const ButtonWrapper = (button) => {
  const visibleState = State(
    'unvisible__button-wrapper',
    'visible__button-wrapper',
  );

  const changeVisible = () => {
    visibleState.switchState();
    button.changeState();
  };

  const render = (drawIt, form) => {
    return (
      <>
        <div className={`button__wrapper ${visibleState.getState()}`}>
          {button.render(drawIt, form, changeVisible)}
        </div>
      </>
    );
  };

  return { render, changeVisible };
};
