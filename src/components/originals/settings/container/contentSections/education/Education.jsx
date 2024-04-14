import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext.ts';
import { appModel } from '../../../../../../main.jsx';
import { Ref } from '../../../../../prototypes/ref/Ref.jsx';

export const Education = () => {
  const drawnNode = State('button', 'form', appModel.settings.container.sections.education.defaultStates.drawnNode);
  const isVisible = State('visible__section', 'unvisible__section', appModel.settings.container.sections.defaultStates.sectionVisible);
  const ref = Ref(['visible__section', 'unvisible__section']);

  Object.assign(appModel.settings.container.sections.education.states.drawnNode, drawnNode);
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsStyles, { education: isVisible });
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsRefs, { education: ref });

  return (
    <>
      <div ref={ref.getRef()} className={`education ${isVisible.getState()}`}>
        <PropsContext.Provider value={appModel.settings.container.sections.education}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};