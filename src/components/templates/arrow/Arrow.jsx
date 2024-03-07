import { useState } from 'react';
import '../../../styles/Arrow.css';

export const Arrow = () => {
  const [pozition, setPozition] = useState('right');

  const setPozitionArrow = () => {
    setPozition(pozition === 'right' ? 'down' : 'right');
  };

  const render = (
    <>
      <div className={`arrow ${pozition}`}></div>
    </>
  );

  return { render, setPozitionArrow };
};
