import { useState } from 'react';
import { ExperienceAdd } from './experienceAdd/ExperienceAdd';

export const ExperienceSection = (form) => {
  const [state, setState] = useState(0);
  const [isForm, setIsForm] = useState(false);

  const setForm = () => {
    setIsForm(!isForm);
  }

  const render = (
    <>
      <div className={`experience__section`}>
        {(() => {
          if (isForm) {
            return (<>
              {form.render()}
            </>)
          } else {
            return (<><ExperienceAdd setForm={setForm} status={state} form={form}></ExperienceAdd></>)
          }
        })()}
      </div>
    </>
  );

  const changeState = () => {
    setState(state === 1 ? 0 : 1);
  };

  const isFormOpen = () => {
    return isForm;
  }

  return { render, changeState, isFormOpen };
};
