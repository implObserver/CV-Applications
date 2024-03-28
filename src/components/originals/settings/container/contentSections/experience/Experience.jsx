import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = ({ props }) => {
  const drawnNode = State('button', 'form');
  Object.assign(props.states.drawnNode, drawnNode);

  return (
    <>
      <div className='experience'>
        <EducationHead name='Experience' props={props}></EducationHead>
        <EducationSection name='Experience' props={props}></EducationSection>
      </div>
    </>
  );

};
