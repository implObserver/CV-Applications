import { Arrow } from '../../arrow/Arrow';
import { Toggle } from '../../toggle/Toggle';

export const Head = () => {
  const state = Toggle('close__head', 'open__head');
  const block = Toggle('unblock', 'block');

  const arrow = Arrow();

  const getArrow = () => {
    return arrow;
  };

  const changeState = () => {
    state.switchState();
  };

  const changeBlock = (val) => {
    block.manual(val);
  };

  const getState = () => {
    return state.getState();
  };

  const getBlockStatus = () => {
    return block.getState();
  };

  const setOpenerVizualization = (section) => {
    arrow.setPozitionArrow();
    section.changeState();
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
        className={`section__head ${state.getState()} ${block.getState()}`}
        onClick={() => {
          setOpenerVizualization(section);
          formVerification(section, form);
        }}
      >
        <h2>Education</h2>
        {arrow.render}
      </button>
    </>
  );

  return { getArrow, changeState, changeBlock, getState, getBlockStatus, render };
};
