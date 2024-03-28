import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';
import { Props } from '../../../../../dataManagments/props/Global.jsx';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext.ts';

export const Education = () => {
  const drawnNode = State('button', 'form');
  Object.assign(Props.states.education.states.drawnNode, drawnNode);

  return (
    <>
      <div className='education'>
        <PropsContext.Provider value={Props.states.education}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};