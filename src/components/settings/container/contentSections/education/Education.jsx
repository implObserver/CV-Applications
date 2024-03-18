import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../prototypes/toggle/Toggle.jsx';

export const Education = ({ props }) => {
  const open = State(false, true);

  const drawnNode = State('button', 'form');
  console.log(props)
  Object.assign(props.states.open, open);
  Object.assign(props.states.drawnNode, drawnNode);

  return (
    <>
      <div className='education'>
        <EducationHead name='Education' props={props}></EducationHead>
        <EducationSection name='Education' props={props}></EducationSection>
      </div>
    </>
  );

};