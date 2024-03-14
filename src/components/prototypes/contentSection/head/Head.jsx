import { Arrow } from '../../arrow/Arrow';
import { State } from '../../toggle/Toggle';

export const Head = (name) => {
  const state = State('close__head', 'open__head');

  const arrow = Arrow();

  const getArrow = () => {
    return arrow;
  };

  const changeState = () => {
    state.switchState();
  };

  const getState = () => {
    return state.getState();
  };

  const setOpenerVizualization = (section) => {
    arrow.setPozitionArrow();
    section.changeState();
    section.getChilds()[0].changeVisible();
    changeState();
  }

  const formVerification = (section, form) => {
    if (section.isFormOpen()) {
      form.changeVisible(state.getState());
    }
  }

  const render = (section, form) => (
    <>
      <button
        className={`section__head ${state.getState()}`}
        onClick={() => {
          setOpenerVizualization(section);
          formVerification(section, form);
        }}
      >
        <h2>{name}</h2>
        {arrow.render}
      </button>
    </>
  );

  return { getArrow, changeState, getState, render };
};
