import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';
import { Props } from '../../../../../dataManagments/props/Global.jsx';

export const Education = () => {
  const drawnNode = State('button', 'form');
  console.log(Props)
  Object.assign(Props.states.education.states.drawnNode, drawnNode);

  return (
    <>
      <div className='education'>
        <EducationHead id='education'></EducationHead>
        <EducationSection id='education'></EducationSection>
      </div>
    </>
  );

};