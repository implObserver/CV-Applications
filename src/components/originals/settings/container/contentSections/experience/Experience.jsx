import { appModel } from "../../../../../../main";
import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = () => {
  const drawnNode = State('button', 'form', appModel.settings.container.sections.experience.defaultStates.drawnNode);
  const isVisible = State('visible__section', 'unvisible__section', appModel.settings.container.sections.defaultStates.sectionVisible);

  Object.assign(appModel.settings.container.sections.experience.states.drawnNode, drawnNode);
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsStyles, { experience: isVisible });
  return (
    <>
      <div className={`experience ${isVisible.getState()}`}>
        <PropsContext.Provider value={appModel.settings.container.sections.experience}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );
};
