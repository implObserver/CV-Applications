import '../../../styles/Arrow.css';
import { Toggle } from '../toggle/Toggle';

export const Arrow = () => {
  const pozition = Toggle('right', 'down');

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
