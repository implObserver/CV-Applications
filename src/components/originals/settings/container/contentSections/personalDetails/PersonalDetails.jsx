import { appModel } from "../../../../../../main";
import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../prototypes/state/State";
import { PersonalDetailsHead } from "./head/PersonalDetailsHead";
import { PersonalDetailsSection } from "./section/PersonalDetailsSection";

export const PersonalDetails = () => {
  const drawnNode = State('form', 'form');
  const isVisible = State('visible__section', 'unvisible__section', appModel.settings.container.sections.defaultStates.sectionVisible);

  Object.assign(appModel.settings.container.sections.personalDetails.states.drawnNode, drawnNode);
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsStyles, { personalDetails: isVisible });

  return (
    <>
      <div className={`personal__details ${isVisible.getState()}`}>
        <PropsContext.Provider value={appModel.settings.container.sections.personalDetails}>
          <PersonalDetailsHead></PersonalDetailsHead>
          <PersonalDetailsSection></PersonalDetailsSection>
        </PropsContext.Provider>
      </div >
    </>
  );
};
