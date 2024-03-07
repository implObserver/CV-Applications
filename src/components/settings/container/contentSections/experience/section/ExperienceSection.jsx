import { useState } from 'react';
import { ExperienceAdd } from './experienceAdd/ExperienceAdd';

export const ExperienceSection = () => {
  const [state, setState] = useState('close');

  const render = (
    <>
      <div className={`experience__section`}>
        <ExperienceAdd status={state}></ExperienceAdd>
      </div>
    </>
  );

  const changeState = () => {
    setState(state === 'close' ? 'open' : 'close');
  };

  return { render, changeState };
};
