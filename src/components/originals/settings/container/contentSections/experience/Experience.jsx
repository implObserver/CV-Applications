import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = () => {
  const drawnNode = State('button', 'form', Props.states.experience.defaultStates.drawnNode);

  Object.assign(Props.states.experience.states.drawnNode, drawnNode);

  return (
    <>
      <div className='experience'>
        <PropsContext.Provider value={Props.states.experience}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};
