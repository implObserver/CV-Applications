import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = () => {
  const drawnNode = State('button', 'form', Props.states.experience.defaultStates.drawnNode);
  const isVisible = State('visible__section', 'unvisible__section', Props.states.sections.defaultStates.sectionVisible);

  Object.assign(Props.states.experience.states.drawnNode, drawnNode);
  Object.assign(Props.states.sections.objects.sectionsStyles.experience, isVisible);
  
  return (
    <>
      <div className={`experience ${isVisible.getState()}`}>
        <PropsContext.Provider value={Props.states.experience}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};
