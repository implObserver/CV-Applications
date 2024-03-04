import { useState } from 'react';
import '../../../../../../styles/ExperienceSection.css';

export const ExperienceSection = () => {
  const [state, setState] = useState('close');

  const render = (
    <>
      <div className={`experience__section ${state}`}></div>
    </>
  );

  const changeState = () => {
    setState(state === 'close' ? 'open' : 'close');
  };

  return { render, changeState };
};
