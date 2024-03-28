import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = () => {
  const drawnNode = State('button', 'form');

  Object.assign(Props.states.experience.states.drawnNode, drawnNode);

  return (
    <>
      <div className='experience'>
        <EducationHead id='experience'></EducationHead>
        <EducationSection id='experience'></EducationSection>
      </div>
    </>
  );

};
