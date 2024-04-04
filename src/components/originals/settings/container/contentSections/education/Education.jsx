import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';
import { Props } from '../../../../../dataManagments/props/Global.jsx';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext.ts';

export const Education = () => {
  const drawnNode = State('button', 'form', Props.states.education.defaultStates.drawnNode);
  const isVisible = State('visible__section', 'unvisible__section', Props.states.sections.defaultStates.sectionVisible);

  Object.assign(Props.states.education.states.drawnNode, drawnNode);
  Object.assign(Props.states.sections.objects.sectionsStyles.education, isVisible);

  return (
    <>
      <div className={`education ${isVisible.getState()}`}>
        <PropsContext.Provider value={Props.states.education}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};