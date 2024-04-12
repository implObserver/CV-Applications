import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { PersonalDetailsHead } from "./head/PersonalDetailsHead";
import { PersonalDetailsSection } from "./section/PersonalDetailsSection";

export const PersonalDetails = () => {
  const drawnNode = State('form', 'form');
  const isVisible = State('visible__section', 'unvisible__section', Props.states.sections.defaultStates.sectionVisible);

  Object.assign(Props.states.personalDetails.states.drawnNode, drawnNode);
  Object.assign(Props.states.sections.objects.sectionsStyles.personalDetails, isVisible);

  return (
    <>
      <div className={`personal__details ${isVisible.getState()}`}>
        <PropsContext.Provider value={Props.states.personalDetails}>
          <PersonalDetailsHead></PersonalDetailsHead>
          <PersonalDetailsSection></PersonalDetailsSection>
        </PropsContext.Provider>
      </div>
    </>
  );
};
