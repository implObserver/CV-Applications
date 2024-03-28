import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';

export const Education = ({ props }) => {
  const drawnNode = State('button', 'form');
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