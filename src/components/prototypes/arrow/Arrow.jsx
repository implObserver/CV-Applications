import '../../../styles/Arrow.css';
import { State } from '../toggle/Toggle';

export const Arrow = () => {
  const pozition = State('right', 'down');

  const setPozitionArrow = () => {
    pozition.switchState();
  };

  const render = (
    <>
      <div className={`arrow ${pozition.getState()}`}></div>
    </>
  );

  return { render, setPozitionArrow };
};
