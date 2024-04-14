import { appModel } from "../../../../../../main";
import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Ref } from "../../../../../prototypes/ref/Ref";
import { State } from "../../../../../prototypes/state/State";
import { PersonalDetailsHead } from "./head/PersonalDetailsHead";
import { PersonalDetailsSection } from "./section/PersonalDetailsSection";

export const PersonalDetails = () => {
  const drawnNode = State('form', 'form');
  const isVisible = State('visible__section', 'unvisible__section', appModel.settings.container.sections.defaultStates.sectionVisible);
  const ref = Ref(['visible__section', 'unvisible__section'], appModel.settings.container.dropdownLists.sections.defaultStates.elementStyle);

  Object.assign(appModel.settings.container.sections.personalDetails.states.drawnNode, drawnNode);
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsStyles, { personalDetails: isVisible });
  Object.assign(appModel.settings.container.dropdownLists.sections.objects.elementsRefs, { personalDetails: ref });

  return (
    <>
      <div ref={ref.getRef()} className={`personal__details ${ref.getClass()}`}>
        <PropsContext.Provider value={appModel.settings.container.sections.personalDetails}>
          <PersonalDetailsHead></PersonalDetailsHead>
          <PersonalDetailsSection></PersonalDetailsSection>
        </PropsContext.Provider>
      </div >
    </>
  );
};
