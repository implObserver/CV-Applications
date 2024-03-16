import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../prototypes/toggle/Toggle.jsx';

export const Education = ({ props }) => {
  const open = State(false, true);

  const drawnNode = State('button', 'form');

  const education = {
    states: {
      open: open,
      drawnNode: drawnNode,
    }
  }

  Object.assign(props.states, { education });

  return (
    <>
      <div className='education'>
        <EducationHead name='Education' props={props.states.education}></EducationHead>
        <EducationSection name='Education' props={props.states.education}></EducationSection>
      </div>
    </>
  );

};