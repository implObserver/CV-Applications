import { useEffect } from "react";
import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../prototypes/state/State";
import { PersonalDetailsHead } from "./head/PersonalDetailsHead";
import { PersonalDetailsSection } from "./section/PersonalDetailsSection";
import { FirstRender } from "../../../../../dataManagments/example/FirstRender";
import { useThisContext } from "../../../../../dataManagments/context/Context";

export const PersonalDetails = () => {
  const update = State();
  const props = useThisContext();
  const sections = props.sections;
  const section = sections.personalDetails;
  const list = props.dropdownLists.sections;

  const isVisible = State(
    'visible__section',
    'unvisible__section',
    sections.defaultStates.sectionVisible
  );

  Object.assign(section.states, { update: update });
  Object.assign(list.objects.elementsStyles, { personalDetails: isVisible });

  useEffect(() => {
    FirstRender.detailsForm();
  })

  return (
    <>
      <div className={`personal__details ${isVisible.getState()}`}>
        <PropsContext.Provider value={section}>
          <PersonalDetailsHead></PersonalDetailsHead>
          <PersonalDetailsSection></PersonalDetailsSection>
        </PropsContext.Provider>
      </div >
    </>
  );
};
